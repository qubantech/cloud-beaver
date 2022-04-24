import React from 'react'
import { createStyles, Box, Text, Group } from '@mantine/core'
import { ListSearch } from 'tabler-icons-react'
import { useStyles } from './table-of-contents.style'
import { useNavigate } from 'react-router-dom'


interface TableOfContentsProps {
	links: { label: string; link: string; order: number }[];
	active: string;
	setActive: (active: string) => void
}

export function TableOfContents({ links, active, setActive }: TableOfContentsProps) {

	const navigate = useNavigate()
	const { classes, cx } = useStyles()

	const items = links.map((item) => (
		<Box
			onClick={() => {
				setActive(item.link)
				navigate(item.link)
			}}
			key={item.label}
			className={cx(classes.link, { [classes.linkActive]: active === item.link })}
			sx={(theme) => ({ paddingLeft: item.order * theme.spacing.md })}
		>
			{item.label}
		</Box>
	))

	return (
		<div>
			<Group mb="md">
				<ListSearch size={18} />
				<Text>Уведомления</Text>
			</Group>
			{items}
		</div>
	)
}