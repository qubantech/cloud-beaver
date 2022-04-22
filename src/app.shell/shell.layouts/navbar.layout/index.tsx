import React, { RefObject, useEffect, useMemo, useState } from 'react'
import { Navbar, SegmentedControl, Text } from '@mantine/core'
import { Logout, Icon } from 'tabler-icons-react'
import { useNavbarStyles } from './navbar.style'
import { Link } from 'react-router-dom'
import { useId } from '@mantine/hooks'
import { useRecoilState } from 'recoil'
import { NavbarState } from '../../shell.state'


interface NavbarItem {
	link: string;
	label: string;
	icon: Icon;
}

interface NavbarTab {
	label: string;
	link: string;
	links: NavbarItem[];
}

export interface NavbarSegmentedProps {
	data: NavbarTab[];
	showTabs: boolean;
	logoutCallback: () => void;
	userEmail: string;
	style?: Object;
	forwardRef?: RefObject<any>;
}

type Map = { [key:string]: NavbarItem[]; }


const NavbarMenuItem = ({item, classes, cx, active, setActive}: {
	item: NavbarItem,
	classes: Record<any, any>,
	cx: (...args: any) => string,
	active: string,
	setActive: (state: string) => void
}) => {

	const [ , setShowNavbar] = useRecoilState(NavbarState)

	return <Link
		to={item.link}
		className={cx(classes.link, { [classes.linkActive]: item.label === active })}
		onClick={() => {
			setActive(item.label)
			setShowNavbar(false)
		}}
	>
		<item.icon className={classes.linkIcon}/>
		<span>{item.label}</span>
	</Link>
}


export const NavbarSegmented = (
	{ data, showTabs=true, logoutCallback, userEmail, style, forwardRef }: NavbarSegmentedProps
) => {
	const uuid = useId()

	const { classes, cx } = useNavbarStyles()

	const [ section, setSection ] = useState<string>('')
	const [ active, setActive ] = useState<string>('')

	
	useEffect(() => {
		setSection(data[0].label)
		setActive(data[0].label)
	}, [])


	const tabs: Map = useMemo(
		() => data.reduce(
			(tabs, tab) => {

				const value = tab.label
				const links = tab.links.map((item) =>
					<NavbarMenuItem
						item={item}
						classes={classes}
						cx={cx}
						active={active}
						setActive={setActive}
						key={item.label + uuid}
					/>
				)

				return  {
					...tabs,
					[value]: links
				}

			}, {}
		),
		[]
	)

	const UserEmail = userEmail &&
		<Text weight={500} size='md' className={classes.title} color='dimmed' mb='xs' >
			{userEmail}
		</Text>


	const TabSwitchButtons = useMemo(
		() => data.map(tab => ({ value: tab.label, label: tab.label })),
		[]
	)

	const Tabs = showTabs &&
		<SegmentedControl
			value={section}
			onChange={setSection}
			data={TabSwitchButtons}
			fullWidth
		/>

	return (
		<Navbar p='md' className={classes.navbar} style={style} ref={forwardRef} fixed >
			<Navbar.Section mt='xs'>
				{UserEmail}
				{Tabs}
			</Navbar.Section>
			<Navbar.Section grow mt='xl'>
				<>
					{tabs[section]}
				</>
			</Navbar.Section>
			<Navbar.Section mb='md' className={classes.footer}>
				<div className={classes.link} onClick={logoutCallback}>
					<Logout className={classes.linkIcon}/>
					<span>Logout</span>
				</div>
			</Navbar.Section>
		</Navbar>
	)
}