import React from 'react'
import { Card, Avatar, Text, Group } from '@mantine/core'
import { useStyles } from './project-card.style'
import { useNavigate } from 'react-router-dom'


interface ArticleCardVerticalProps {
	category: string;
	title: string;
	date: string;
	author: {
		name: string;
		avatar: string;
	};
	redirect: string;
}

export function ProjectCard({
	category,
	title,
	date,
	author,
	redirect,
}: ArticleCardVerticalProps) {

	const navigate = useNavigate()
	const { classes } = useStyles()

	return (
		<Card withBorder radius="md" p={0} className={classes.card} onClick={() => navigate(redirect)} style={{cursor: 'pointer'}}>
			<Group noWrap spacing={0}>
				<div className={classes.body}>
					<Text transform="uppercase" color="dimmed" weight={700} size="xs">
						{category}
					</Text>
					<Text className={classes.title} mt="xs" mb="md">
						{title}
					</Text>
					<Group noWrap spacing="xs">
						<Group spacing="xs" noWrap>
							<Avatar size={20} src={author.avatar} />
							<Text size="xs">{author.name}</Text>
						</Group>
						<Text size="xs" color="dimmed">
							•
						</Text>
						<Text size="xs" color="dimmed">
							{date}
						</Text>
					</Group>
				</div>
			</Group>
		</Card>
	)
}