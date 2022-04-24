import React from 'react'
import { Card, Avatar, Text, Group, Badge, ActionIcon } from '@mantine/core'
import { useStyles } from './project-card.style'
import { useNavigate } from 'react-router-dom'
import { Adjustments } from 'tabler-icons-react'


interface ArticleCardVerticalProps {
	category: string;
	title: string;
	date: string;
	department: string;
	redirect: string;
	isSelected?: boolean;
	onClick: () => void;
}

export function ProjectCard({
	category,
	title,
	date,
	department,
	redirect,
	isSelected = false,
	onClick,
}: ArticleCardVerticalProps) {

	const navigate = useNavigate()
	const { classes } = useStyles()

	return (
		<Card withBorder
			  radius="md"
			  p={0}
			  className={isSelected ? classes.selectedCard : classes.card}
			  style={{ cursor: 'pointer' }}
			  onClick={onClick}
		>
			<Group noWrap spacing={0}>
				<div className={isSelected ? classes.bodySelected : classes.body}>
					<Group direction={'row'} position={'apart'}>
						<ActionIcon size={'md'} onClick={() => navigate(redirect)} style={{ cursor: 'pointer' }}>
							<Adjustments/>
						</ActionIcon>
					</Group>
					<Text className={isSelected ? classes.titleSelected : classes.title} mt="lg" mb="md" size={'lg'}>
						{title}
					</Text>
					<Group noWrap spacing="xs">
						<Group spacing="xs" noWrap>
							<Text size="sm" style={{ letterSpacing: '-0.08em' }}>{department}</Text>
						</Group>
						<Text size="sm" color="dimmed" className={isSelected ? classes.dateSelected : classes.date}>
							{date}
						</Text>
					</Group>
					<Text mt={'md'} transform="uppercase" color="dimmed" weight={700} size="xs">
						<Badge variant="gradient" gradient={{
							from: isSelected ? '#eeeeee' : 'indigo',
							to: isSelected ? 'gray' :'cyan'
						}}
							   sx={{
								   color: isSelected ? '#252525' : '#ffffff',
								   textOverflow: 'ellipsis',
								   maxWidth: '180px'
							   }}>
							{category}
						</Badge>
					</Text>
				</div>
			</Group>
		</Card>
	)
}