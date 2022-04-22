import React from 'react'
import { Card, Group, Switch, Text } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { useStyles } from './switches-card.style'


interface SwitchesCardProps {
    title: string;
    description: string;
    data: {
        title: string;
        description: string;
    }[];
}

export function SwitchesCard({ title, description, data }: SwitchesCardProps) {

	const { classes } = useStyles()


	const items = data.map((item) => (
		<Group key={randomId()} position="apart" className={classes.item} noWrap spacing="xl">
			<div>
				<Text>{item.title}</Text>
				<Text size="xs" color="dimmed">
					{item.description}
				</Text>
			</div>
			<Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
		</Group>
	))

	return (
		<Card withBorder radius="md" p="xl" className={classes.card}>
			<Text size="lg" className={classes.title} weight={500}>
				{title}
			</Text>
			<Text size="xs" color="dimmed" mt={3} mb="xl">
				{description}
			</Text>
			{items}
		</Card>
	)
}