import React from 'react'
import { Group, Paper, SimpleGrid, Text } from '@mantine/core'
import {
	UserPlus,
	Discount2,
	Receipt2,
	Coin,
	ArrowUpRight,
	ArrowDownRight,
} from 'tabler-icons-react'
import { useStyles } from './main-metric-widget.style'


const icons = {
	user: UserPlus,
	discount: Discount2,
	receipt: Receipt2,
	coin: Coin,
}

interface StatsGridProps {
	data: { title: string; icon: keyof typeof icons; value: string; diff: number }[];
}

export function MainMetricWidget({ data }: StatsGridProps) {

	const { classes } = useStyles()

	const stats = data.map((stat) => {

		const Icon = icons[stat.icon]
		const DiffIcon = stat.diff > 0 ? ArrowUpRight : ArrowDownRight

		return (
			<Paper withBorder p="md" radius="md" key={stat.title}>
				<Group position="apart">
					<Text size="xs" color="dimmed" className={classes.title}>
						{stat.title}
					</Text>
					<Icon className={classes.icon} size={22} />
				</Group>

				<Group align="flex-end" spacing="xs" mt={25}>
					<Text className={classes.value}>{stat.value}</Text>
					<Text
						color={stat.diff > 0 ? 'teal' : 'red'}
						size="sm"
						weight={500}
						className={classes.diff}
					>
						<span>{stat.diff}%</span>
						<DiffIcon size={16} />
					</Text>
				</Group>

				<Text size="xs" color="dimmed" mt={7}>
					Compared to previous month
				</Text>
			</Paper>
		)
	})
	return (
		<div className={classes.root}>
			<SimpleGrid
				cols={1}
				breakpoints={[
					{ maxWidth: 'md', cols: 2 },
					{ maxWidth: 'xs', cols: 1 },
				]}
			>
				{stats}
			</SimpleGrid>
		</div>
	)
}