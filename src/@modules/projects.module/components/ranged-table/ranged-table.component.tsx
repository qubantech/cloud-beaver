import React from 'react'
import { Table, Progress, Anchor, Text, Group, ScrollArea } from '@mantine/core'
import { useStyles } from './ranged-table.style'


interface TableReviewsProps {
	data: {
		title: string;
		iq: number;
		kpi: number;
		deadline: string;
		budget: string;
	}[];
}

export function RangedTable({ data }: TableReviewsProps) {
	const { classes, theme } = useStyles()

	const rows = data.map((row) => {

		return (
			<tr key={row.title}>
				<td>
					<Anchor<'a'> size="sm" onClick={(event) => event.preventDefault()}>
						{row.title}
					</Anchor>
				</td>
				<td>{row.iq}</td>
				<td>{row.kpi}</td>
				<td>{row.deadline}</td>
				<td>{row.budget}</td>
			</tr>
		)
	})

	return (
		<ScrollArea>
			<Table sx={{ minWidth: 800 }} verticalSpacing="xs">
				<thead>
					<tr>
						<th>Название</th>
						<th>IQ</th>
						<th>KPI</th>
						<th>Дедлайн</th>
						<th>Бюджет</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	)
}