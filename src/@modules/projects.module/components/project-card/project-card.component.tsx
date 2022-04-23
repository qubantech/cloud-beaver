import React from 'react'
import { Card, Avatar, Text, Group, Badge } from '@mantine/core'
import { useStyles } from './project-card.style'
import { useNavigate } from 'react-router-dom'


interface ArticleCardVerticalProps {
	category: string;
	title: string;
	date: string;
	department: string;
	redirect: string;
}

export function ProjectCard({
	category,
	title,
	date,
	department,
	redirect,
}: ArticleCardVerticalProps) {

	const navigate = useNavigate()
	const { classes } = useStyles()

	return (
		<Card withBorder radius="md" p={0} className={classes.card} onClick={() => navigate(redirect)} style={{cursor: 'pointer'}}>
			<Group noWrap spacing={0}>
				<div className={classes.body}>
					<Text transform="uppercase" color="dimmed" weight={700} size="xs">
						<Badge >
							{category}
						</Badge>
					</Text>
					<Text className={classes.title} mt="lg" mb="md" size={'lg'}>
						{title}
					</Text>
					<Group noWrap spacing="xs">
						<Group spacing="xs" noWrap>
							<Text size="md"style={{letterSpacing: '-0.08em'}}>{department}</Text>
						</Group>
						<Text size="md" color="dimmed">
							{date}
						</Text>
					</Group>
				</div>
			</Group>
		</Card>
	)
}