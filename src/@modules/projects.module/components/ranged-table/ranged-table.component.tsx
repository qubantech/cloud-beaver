import React from 'react'
import { Table, Progress, Anchor, Text, Group, ScrollArea } from '@mantine/core'
import { useStyles } from './ranged-table.style'


interface TableReviewsProps {
	data: {
		title: string;
		author: string;
		year: number;
		reviews: { positive: number; negative: number };
	}[];
}

export function RangedTable({ data }: TableReviewsProps) {
	const { classes, theme } = useStyles()

	const rows = data.map((row) => {
		const totalReviews = row.reviews.negative + row.reviews.positive
		const positiveReviews = (row.reviews.positive / totalReviews) * 100
		const negativeReviews = (row.reviews.negative / totalReviews) * 100

		return (
			<tr key={row.title}>
				<td>
					<Anchor<'a'> size="sm" onClick={(event) => event.preventDefault()}>
						{row.title}
					</Anchor>
				</td>
				<td>{row.year}</td>
				<td>
					<Anchor<'a'> size="sm" onClick={(event) => event.preventDefault()}>
						{row.author}
					</Anchor>
				</td>
				<td>{Intl.NumberFormat().format(totalReviews)}</td>
				<td>
					<Group position="apart">
						<Text size="xs" color="teal" weight={700}>
							{positiveReviews.toFixed(0)}%
						</Text>
						<Text size="xs" color="red" weight={700}>
							{negativeReviews.toFixed(0)}%
						</Text>
					</Group>
					<Progress
						classNames={{ bar: classes.progressBar }}
						sections={[
							{
								value: positiveReviews,
								color: theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[6],
							},
							{
								value: negativeReviews,
								color: theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[6],
							},
						]}
					/>
				</td>
			</tr>
		)
	})

	return (
		<ScrollArea>
			<Table sx={{ minWidth: 800 }} verticalSpacing="xs">
				<thead>
					<tr>
						<th>Book title</th>
						<th>Year</th>
						<th>Author</th>
						<th>Reviews</th>
						<th>Reviews distribution</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	)
}