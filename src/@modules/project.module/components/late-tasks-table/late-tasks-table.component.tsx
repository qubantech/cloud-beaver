import { Card, Group, Table, Title } from '@mantine/core'
import React from 'react'
import { useStyles } from '../ring-stats/ring-stats.style'
import { TrendingDown } from 'tabler-icons-react'


export const LateTasksTableView = () => {

	const { classes, } = useStyles()

	const elements = [
		{
			task: 'Задача 1413',
			timeDeviation: '46 дн',
			budgetDeviation: '170 000 ₽',
			predict: <Group><TrendingDown color={'red'}/>-16.01</Group>,
		},
		{
			task: 'Задача 1221',
			timeDeviation: '23 дн',
			budgetDeviation: '131 100 ₽',
			predict: <Group><TrendingDown color={'red'}/>-14.07</Group>,
		},
	]

	const rows = elements.map((element) => (
		<tr key={element.task}>
			<td>{element.task}</td>
			<td>{element.timeDeviation}</td>
			<td>{element.budgetDeviation}</td>
			<td>{element.predict}</td>
		</tr>
	))

	
	return <>
		<Title order={3} style={{color: '#cbcbcb', fontFamily: 'Greycliff CF'}}>
			Задачи с наибольшим отставанием
		</Title>
		<Card withBorder p="xl" radius="md" className={classes.card}>
			<Table striped>
				<thead>
					<tr>
						<th>Задача</th>
						<th>Отставание от сроков</th>
						<th>Превышение бюджета</th>
						<th>Прогноз вклада в IQ за год</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</Card>
	</>
}