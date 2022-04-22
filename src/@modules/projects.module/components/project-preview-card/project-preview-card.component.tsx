import React from 'react'
import { Heart } from 'tabler-icons-react'
import {
	Card,
	Image,
	Text,
	Group,
	Badge,
	Button,
	ActionIcon,
	createStyles,
	useMantineTheme,
} from '@mantine/core'
import { useStyles } from './project-preview-card.style'


interface BadgeCardProps {
	image: string;
	title: string;
	country: string;
	description: string;
	badges: {
		emoji: string;
		label: string;
	}[];
}

export function ProjectPreviewCard({ image, title, description, country, badges }: BadgeCardProps) {
	const { classes } = useStyles()
	const theme = useMantineTheme()

	const features = badges.map((badge) => (
		<Badge
			color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
			key={badge.label}
			leftSection={badge.emoji}
		>
			{badge.label}
		</Badge>
	))

	return (
		<Card withBorder radius="md" p="md" className={classes.card}>
			<Card.Section>
				<Image src={image} alt={title} height={180} />
			</Card.Section>

			<Card.Section className={classes.section} mt="md">
				<Group position="apart">
					<Text size="lg" weight={500}>
						{title}
					</Text>
					<Badge size="sm">{country}</Badge>
				</Group>
				<Text size="sm" mt="xs">
					{description}
				</Text>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text mt="md" className={classes.label} color="dimmed">
					Perfect for you, if you enjoy
				</Text>
				<Group spacing={7} mt={5}>
					{features}
				</Group>
			</Card.Section>

			<Group mt="xs">
				<Button radius="md" style={{ flex: 1 }}>
					Show details
				</Button>
				<ActionIcon variant="default" radius="md" size={36}>
					<Heart size={18} className={classes.like} />
				</ActionIcon>
			</Group>
		</Card>
	)
}