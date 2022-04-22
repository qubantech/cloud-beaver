import React from 'react'
import { Text, Card, RingProgress, Group } from '@mantine/core'
import { useStyles } from './stats-ring-card.style'


interface StatsRingCardProps {
    title: string;
    completed: number;
    total: number;
    stats: {
        value: number;
        label: string;
    }[];
}

export function StatsRingCard({ title, completed, total, stats }: StatsRingCardProps) {

	const { classes, theme } = useStyles()

	const items = stats.map((stat) => (
		<div key={stat.label}>
			<Text className={classes.label}>{stat.value}</Text>
			<Text size="xs" color="dimmed">
				{stat.label}
			</Text>
		</div>
	))

	return (
		<Card withBorder p="xl" radius="md" className={classes.card}>
			<div className={classes.inner}>
				<div>
					<Text size="xl" className={classes.label}>
						{title}
					</Text>
					<div>
						<Text className={classes.lead} mt={30}>
							{completed}
						</Text>
						<Text size="xs" color="dimmed">
                            Completed
						</Text>
					</div>
					<Group mt="lg">{items}</Group>
				</div>

				<div className={classes.ring}>
					<RingProgress
						roundCaps
						thickness={6}
						size={150}
						sections={[{ value: (completed / total) * 100, color: theme.primaryColor }]}
						label={
							<div>
								<Text align="center" size="lg" className={classes.label} sx={{ fontSize: 22 }}>
									{((completed / total) * 100).toFixed(0)}%
								</Text>
								<Text align="center" size="xs" color="dimmed">
                                    Completed
								</Text>
							</div>
						}
					/>
				</div>
			</div>
		</Card>
	)
}