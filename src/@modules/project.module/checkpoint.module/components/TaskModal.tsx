import React, {useState} from 'react'
import {Badge, Container, Grid, Group, Text, Table, ThemeIcon, MultiSelect} from '@mantine/core'
import { Task } from '../../../../app.shared/app.models'
import {AlertCircle, AlertTriangle, Braces, Brackets, Clock, ClockOff, Paperclip, Tags} from 'tabler-icons-react'
import {DropzoneContainer} from './dropzone'


const TaskModal = ({
	id,
	title,
	description,
	begin = 1650737983000,
	endPlan = 1250037980000,
	endFact = 1300737973000,
	tags = ['tag1', 'tag2', 'tag3', 'tag4','tag5'],
	applications,
	status,
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

	const [tagSelect, setTagSelect] = useState(tags)
	const [controllersSelect, setControllersSelect] = useState(controllers)
	const [implementersSelect, setImplementersSelect] = useState(implementers)

	return (
		<Container>
			<Grid>
				<Grid.Col span={6}>
					<Group direction={'column'} spacing={10}>
						<Group spacing={5}>
							<ThemeIcon variant={'filled'}  color={'gray'}>
								<Clock size={20}/>
							</ThemeIcon>
							<Text color={'#909296'}>Дата начала</Text>
						</Group>
						<Group spacing={5}>
							<ThemeIcon variant={'filled'}  color={'gray'}>
								<ClockOff size={20}/>
							</ThemeIcon>
							<Text color={'#909296'}>Дата завершения</Text>
						</Group>
						{
							status === 'Завершено' &&
							<Group spacing={5} style={{marginTop: '15px', marginBottom: '15px'}}>
								<ThemeIcon variant={ 'outline' } color={'orange'}>
									<AlertTriangle size={20}/>
								</ThemeIcon>
								<Text color={'#909296'}>Фактическое завершение</Text>
							</Group>
						}


						<Group spacing={5} style={{minHeight: '50px', marginTop: '50px'}}>
							<ThemeIcon variant={'filled'}  color={'gray'}>
								<Tags size={20}/>
							</ThemeIcon>
							<Text color={'#909296'}>Теги</Text>
						</Group>


						<Group spacing={5} style={{minHeight: '50px'}}>
							<ThemeIcon variant={'filled'}  color={'gray'}>
								<Braces size={20}/>
							</ThemeIcon>
							<Text color={'#909296'}>Менеджеры</Text>
						</Group>


						<Group spacing={5} style={{minHeight: '50px'}}>
							<ThemeIcon variant={'filled'}  color={'gray'}>
								<Brackets size={20}/>
							</ThemeIcon>
							<Text color={'#909296'}>Исполнители</Text>
						</Group>
					</Group>

					<Group spacing={5} style={{marginTop: '50px'}}>
						<ThemeIcon variant={'filled'}  color={'gray'}>
							<ClockOff size={20}/>
						</ThemeIcon>
						<Text color={'#909296'}>Бюджет планируемый</Text>
					</Group>
					<Group spacing={5} style={{marginTop: '15px', marginBottom: '15px'}}>
						<ThemeIcon variant={ 'outline' } color={'orange'}>
							<AlertTriangle size={20}/>
						</ThemeIcon>
						<Text color={'#909296'}>Бюджет затраченный</Text>
					</Group>

					<Group spacing={5} style={{marginTop: '15px', marginBottom: '15px'}}>
						<ThemeIcon variant={ 'outline' } color={'gray'}>
							<Paperclip size={20}/>
						</ThemeIcon>
						<Text color={'#909296'}>Вложения</Text>
					</Group>
				</Grid.Col>



				<Grid.Col span={6}>
					<Group direction={'column'} spacing={10}>
						<Text>{ (new Date(begin)).toLocaleDateString('ru-Ru') }</Text>
						<Text>{ (new Date(begin)).toLocaleDateString('ru-Ru') }</Text>
						{
							status === 'Завершено' &&
							<Text style={{marginTop: '15px', marginBottom: '15px'}}>{ (new Date(endFact)).toLocaleDateString('ru-Ru') }</Text>
						}
						<MultiSelect value={tagSelect} onChange={setTagSelect} data={tags} style={{minHeight: '50px', marginTop: '50px'}}/>
						<MultiSelect value={controllersSelect} onChange={setControllersSelect} data={controllers} style={{minHeight: '50px'}}/>
						<MultiSelect value={implementersSelect} onChange={setImplementersSelect} data={implementers} style={{minHeight: '50px'}}/>


						<Text style={{marginTop: '30px'}}>{ budgetPlan }</Text>
						<Text>{ budgetFact }</Text>
					</Group>
					<DropzoneContainer/>
				</Grid.Col>
			</Grid>



			{/*<Group spacing={150}>*/}
			{/*	<Group spacing={5}>*/}
			{/*		<ThemeIcon variant={'filled'}  color={'gray'}>*/}
			{/*			<Clock size={20}/>*/}
			{/*		</ThemeIcon>*/}
			{/*		<Text color={'#909296'}>Дата начала</Text>*/}
			{/*	</Group>*/}
			{/*	<Text>{ (new Date(begin)).toLocaleDateString('ru-Ru') }</Text>*/}
			{/*</Group>*/}


			{/*<Group spacing={150}>*/}
			{/*	<Group spacing={5}>*/}
			{/*		<ThemeIcon variant={'filled'}  color={'gray'}>*/}
			{/*			<ClockOff size={20}/>*/}
			{/*		</ThemeIcon>*/}
			{/*		<Text color={'#909296'}>Дата завершения</Text>*/}
			{/*	</Group>*/}
			{/*	<Text>{ (new Date(begin)).toLocaleDateString('ru-Ru') }</Text>*/}
			{/*</Group>*/}

		</Container>
	)
}

export default TaskModal