import React from 'react'
import {Badge, Container, Grid, Group, Text, Table, ThemeIcon} from '@mantine/core'
import { Task } from '../../../../app.shared/app.models'
import {AlertCircle, AlertTriangle, Clock, ClockOff} from 'tabler-icons-react'


const TaskModal = ({
	id,
	title,
	description,
	begin = 1650737983000,
	endPlan = 1250037980000,
	endFact = 1300737973000,
	tags = ['tag1', 'tag2', 'tag3', 'tag4','tag5'],
	applications,
	status = 'В процессе',
	implementers = ['Иванов', 'Петров', 'Сидоров'],
	controllers = ['Иванов', 'Петров'],
	chat,
	connectedTasks,
	budgetPlan = 5000000,
	budgetFact = 10000000,
	iq,
}: Task) => {

	const people = implementers?.map((impl, index) => (
		<tr key={ impl }>
			<td>{ (controllers[index] !== null) ? controllers[index] : '' }</td>
			<td>{ impl }</td>
		</tr>
	))

	const DatesGroup = () => {
		return (
			<Group spacing={1} >
				<Group spacing={5}>
					<ThemeIcon variant={ 'outline' }>
						<Clock size={20}/>
					</ThemeIcon>
					<Text>Начало: { (new Date(begin)).toLocaleDateString('ru-Ru') }</Text>
				</Group>
				<Group spacing={5}>
					<ThemeIcon variant={ 'outline' }>
						<ClockOff size={20}/>
					</ThemeIcon>
					<Text>Завершение: { (new Date(endPlan)).toLocaleDateString('ru-Ru') }</Text>
				</Group>
				<Group spacing={5} style={{marginTop: '10px'}}>
					<ThemeIcon variant={ 'outline' } color={'orange'}>
						<AlertTriangle size={20}/>
					</ThemeIcon>
					<Text>Фактическое завершение: { (new Date(endFact)).toLocaleDateString('ru-Ru') }</Text>
				</Group>
			</Group>
		)
	}

	const PeopleTable = () => {
		return (
			<Table>
				<thead>
					<tr>
						<th>Менеджеры</th>
						<th>Исполнители</th>
					</tr>
				</thead>
				<tbody>{ people }</tbody>
			</Table>
		)
	}

	return (
		<Container>
			<Group spacing={5} style={{marginBottom: '15px'}}>
				{
					tags.map((tag, index) => (
						<Badge key={ index } color={'grape'}>
							{ tag }
						</Badge>
					))
				}
			</Group>
			<Grid>
				<Grid.Col span={6}>
					<DatesGroup/>
				</Grid.Col>
				<Grid.Col span={6}>
					<PeopleTable/>
				</Grid.Col>
			</Grid>

			{ description }
		</Container>
	)
}

export default TaskModal