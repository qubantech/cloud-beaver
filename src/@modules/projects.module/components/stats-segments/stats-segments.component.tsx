import React from 'react'
import { createStyles, Progress, Box, Text, Group, Paper, SimpleGrid, Title } from '@mantine/core'
import { ArrowUpRight, DeviceAnalytics } from 'tabler-icons-react'
import { useStyles } from './stats-segments.style'


interface StatsSegmentsProps {
	total: string;
	diff: number;
	data: {
		label: string;
		count: string;
		part: number;
		color: string;
	}[];
}

export function StatsSegments({ total, diff, data }: StatsSegmentsProps) {
	const { classes } = useStyles()

	const segments = data.map((segment) => ({
		value: segment.part,
		color: segment.color,
		label: segment.part > 10 ? `${segment.part}%` : null,
	}))

	const descriptions = data.map((stat) => (
		<Box key={stat.label} sx={{ borderBottomColor: stat.color }} className={classes.stat}>
			<Text transform="uppercase" size="xs" color="dimmed" weight={700}>
				{stat.label}
			</Text>

			<Group position="apart" align="flex-end" spacing={0}>
				<Text weight={700}>{stat.count}</Text>
				<Text color={stat.color} weight={700} size="sm" className={classes.statCount}>
					{stat.part}%
				</Text>
			</Group>
		</Box>
	))

	return (
		<Paper withBorder p="md" radius="md">

			<Group position="apart">
				<Group align="flex-end" spacing="xs">
					<Title order={3}>
						{total}
					</Title>
					<Text color="teal" className={classes.diff} size="md" weight={700}>
						<span>{diff}%</span>
						<ArrowUpRight size={20} style={{ marginBottom: 4 }} />
					</Text>
				</Group>
				<DeviceAnalytics size={20} className={classes.icon} />
			</Group>

			<Text color="dimmed" size="md">
				Рост IQ за последний год
			</Text>

			<Progress
				// @ts-ignore
				sections={segments}
				size={34}
				classNames={{ label: classes.progressLabel }}
				mt={40}
			/>
			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'xs', cols: 1 }]} mt="xl">
				{descriptions}
			</SimpleGrid>
		</Paper>
	)
}