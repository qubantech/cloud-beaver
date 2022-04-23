import React, { FC, PropsWithChildren } from 'react'
import { useRecoilValue } from 'recoil'
import { AppShell, MantineTheme } from '@mantine/core'
import { NavbarState } from './shell.state'
import {
	BellRinging,
	BrandInstagram,
	BrandTwitter,
	BrandYoutube,
	Camera,
	Plus,
} from 'tabler-icons-react'
import { FooterLinks, HeaderMenu, NavbarSegmented } from './shell.layouts'
import { FabButton } from './shell.components/fab.component'
import { useNavigate } from 'react-router-dom'


const Styles = (theme: MantineTheme) => ({
	main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
})

export const Shell: FC<PropsWithChildren<any>> = ({ children }) => {

	const navigate = useNavigate()

	const showNavbar = useRecoilValue(NavbarState)

	const logoutCallback = () => console.log('Logout')


	const DATA = [
		{
			label: 'Demos',
			link: '',
			links: [
				{ link: '/template', label: 'Template', icon: BellRinging },
			]
		},
		{
			label: 'Проекты',
			link: '/projects',
			links: []
		},
	]

	const Header = <HeaderMenu links={DATA}/>

	const Footer = <FooterLinks
		data={DATA}
		copyrightText="© 2022 QubanTech. All rights reserved."
		socialMedia={[
			{ link: 'twitter.com', icon: BrandTwitter },
			{ link: 'youtube.com', icon: BrandYoutube },
			{ link: 'instagram.com', icon: BrandInstagram },
		]}
	/>

	const Navbar = showNavbar
		? <NavbarSegmented
			data={DATA}
			logoutCallback={logoutCallback}
			userEmail={'useremail@template.ru'}
			showTabs
		/>
		: undefined

	const FabWidget = showNavbar
		? undefined
		: <FabButton {...{
			root: {
				icon: Plus,
			},
			data: [
				{
					onClick: () => {
						navigate('/template')
					}, icon: Camera, title: 'Template'
				},
			]
		}}/>


	return <AppShell header={Header} aside={Navbar} footer={Footer} styles={Styles} fixed padding={0}>
		{FabWidget}
		{children}
	</AppShell>

}