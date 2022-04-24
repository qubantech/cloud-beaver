import React, { useState } from 'react'
import {
	Badge,
	Button,
	Card,
	Center,
	Container,
	Drawer,
	Group,
	Input,
	Modal,
	MultiSelect,
	SimpleGrid,
	Spoiler,
	Switch,
	Text,
	Textarea,
	ThemeIcon
} from '@mantine/core'
import { At, Clock, MoodSmile, VideoPlus } from 'tabler-icons-react'
import { DatePicker, TimeInput } from '@mantine/dates'


const Conferences = () => {

	const [modalOpened, setModalOpened] = useState(false)
	const [drawerOpened, setDrawerOpened] = useState(false)

	const participants = [
		'Петров А.А.',
		'Иванов В.Р.',
		'Сидоров К.И.',
		'Петров А.А.',
		'Иванов В.Р.',
		'Сидоров К.И.'
	]

	const ConferenceDetails = () => {

		return <>
			<Drawer
				opened={drawerOpened}
				onClose={() => setDrawerOpened(false)}
				position={'bottom'}
				title="Конференция"
				padding="xl"
				size="xl"
			>
				{/* Drawer content */}
			</Drawer>
		</>
	}

	const onOpenChat = () => {
		return
	}

	const onConnectCall = () => {
		setDrawerOpened(true)
	}

	const onCreateConference = () => {
		setModalOpened(true)
	}

	const CurrentConference = (props: {begin: string, end?: string, status: string}) => (
		<div style={{ width: 340, margin: 'auto', alignSelf: 'start' }}>
			<Card shadow='sm' p='lg'>
				<Group position='apart'>
					<Group direction={'column'} spacing={0}>
						<Text size={'sm'}>
							Тема:
						</Text>
						<Text weight={700}>
							Парк на набережной
						</Text>
					</Group>
					{
						props.status === 'current' ?
							<Badge color='green' variant='light'>
								Назначено
							</Badge>
							:
							<Badge color='red' variant='light'>
								Завершено
							</Badge>
					}

				</Group>
				<Group direction={'column'} spacing={0} style={{marginTop: '10px'}}>
					<Text color={'#909296'}>Начало в {props.begin}</Text>
					{
						props.status !== 'current' &&
						<Text color={'#909296'}>Завершено в {props.end}</Text>
					}
				</Group>
				<Spoiler maxHeight={140} showLabel="Подробнее" hideLabel="Свернуть" style={{marginTop: '40px'}}>
					<Text style={{marginBottom: '5px'}}>Участники</Text>
					<Group direction={'column'} spacing={10} style={{width: '100%'}}>
						{
							participants.map((c, index) => (
								<Card key={index} style={{backgroundColor: '#373A40', padding: '10px', width: '100%'}}>
									<Group direction={'row'} spacing={5}>
										<ThemeIcon variant={'outline'} size={'md'} color={'gray'}>
											<MoodSmile size={17}/>
										</ThemeIcon>
										<Text>{ c }</Text>
									</Group>

								</Card>
							))
						}
					</Group>
				</Spoiler>
				<Button fullWidth variant={'outline'} size={'md'} style={{marginTop: '50px'}} onClick={onOpenChat}>
					Открыть чат
				</Button>
				<Button fullWidth size={'md'} style={{marginTop: '10px'}} onClick={onConnectCall}>
					Присоединиться
				</Button>
			</Card>
		</div>
	)

	const CreateConferenceForm = () => {

		const members = [
			{ value: '1qwe', label: 'Иванов И.И.' },
			{ value: 'wedq', label: 'Лихогуб О.И.' },
			{ value: 'zzxc', label: 'Ванюченко Н.К' },
		]

		const documents = [
			{ value: 'dfs', label: 'Финансовый отчёт о ...' },
			{ value: 'jgh', label: 'Договор подряда на ...' },
			{ value: 'hg', label: 'Отчёт о выполнении проекта ...' },
			{ value: 'jh', label: 'Отчёт по контрольной точке ...' },
		]

		const relatedCheckponts = [
			{
				value: 'fss',
				label: '1.1. Поэтапное внедрение государственных информационных систем обеспечения ' +
					'градостроительной деятельности (при необходимости - на базе существующих информационных систем).'
			},
			{
				value: 'gvv',
				label: '1.2. Внедрение интеллектуальной транспортной модели муниципального образования, ' +
					'обеспечивающей анализ маршрутов движения общественного и частного транспорта, оценку ' +
					'уровня загруженности участков транспортной сети с целью оптимизации организации движения '
			},
		]

		const relatedTasks = [
			{ value: 'fga', label: '1.2.1. КСОТ' },
			{ value: 'fga', label: '1.2.2. КСОДД' },
			{ value: 'mfd', label: '1.2.3. ПКРТИ' },
		]

		const notificationStrategies = [
			{ value: 'rm', label: 'Напомнить за 1 день до' },
			{ value: 'rf', label: 'Напомнить за 1 час до' },
			{ value: 'ls', label: 'Напомнить за 30 минут до' },
			{ value: 'cd', label: 'Свой вариант' },
		]


		const onCreateConferenceInModal = () => {
			console.log('')
		}

		const [showNotifications, setShowNotifications] = useState(false)

		const [selectedCheckpoints, setSelectedCheckpoints] = useState([])

		return <>
			<SimpleGrid cols={2}>

				<Card>
					<Text mb={'md'}>
						Тема конференции
					</Text>
					<SimpleGrid>
						<Input
							icon={<At />}
							placeholder="Тема конференции"
						/>
						<Textarea
							placeholder="Описание"
							label="Описание"
							autosize
							minRows={8}
						/>
					</SimpleGrid>
				</Card>
				<Card>
					<SimpleGrid cols={1} spacing={'md'}>
						<MultiSelect
							data={relatedCheckponts}
							value={selectedCheckpoints}
							// @ts-ignore
							onChange={setSelectedCheckpoints}
							label="Связанные контрольные точки"
							placeholder="Задачи"
						/>
						{
							selectedCheckpoints.length != 0 && <>
								<MultiSelect
									data={members}
									label="Участники конференции"
									placeholder="Участники"
								/>
								<MultiSelect
									data={documents}
									label="Документы к обсуждению"
									placeholder="Документы"
								/>
								<MultiSelect
									data={relatedTasks}
									label="Связанные задачи"
									placeholder="Задачи"
								/>
							</>
						}
					</SimpleGrid>
				</Card>
				<DatePicker placeholder="Выбрать дату" label="Дата проведения" required />
				<SimpleGrid cols={2}>
					<TimeInput
						label="Время начала"
						placeholder="Время начала"
						icon={<Clock size={16} />}
						defaultValue={new Date()}
					/>
					<TimeInput
						label="Время завершения"
						placeholder="Время завершения"
						icon={<Clock size={16} />}
						defaultValue={new Date()}
					/>
				</SimpleGrid>
			</SimpleGrid>
			<SimpleGrid cols={2} mt={'md'}>
				<Card>
					<Text mb={'md'}>Уведомления</Text>
					<SimpleGrid cols={1}>
						<Switch label="Уведомить участников о конференции"
							checked={showNotifications}
							onChange={(event) => setShowNotifications(event.currentTarget.checked)}
						/>
						{
							showNotifications &&
							<MultiSelect
								data={notificationStrategies}
								label="Стратегия уведомлений"
								placeholder="Стратегия уведомлений"
							/>
						}
					</SimpleGrid>
				</Card>
				<Button size={'lg'} style={{position: 'relative'}} onClick={onCreateConferenceInModal} leftIcon={<VideoPlus/>}>
					Создать конференцию
				</Button>
			</SimpleGrid>
		</>
	}

	return<>
		<Modal
			opened={modalOpened}
			onClose={() => setModalOpened(false)}
			title="Новая конференция"
			size={'xl'}
		>
			<CreateConferenceForm/>
		</Modal>
		<Center>
			<Container style={{marginLeft: '30px', marginRight: '30px', marginBottom: '100px', maxWidth: '1180px'}}>
				<Button size={'lg'} style={{marginTop: '50px'}} onClick={onCreateConference} leftIcon={<VideoPlus/>}>
					Создать конференцию
				</Button>
				<Group direction={'column'} style={{marginTop: '50px'}}>
					<Text size={'xl'} color={'#DEE2E6'}>Запланированные конференции</Text>
					<SimpleGrid cols={3}>
						<CurrentConference begin={'08:30'} status={'current'}/>
						<CurrentConference begin={'09:10'} status={'current'}/>
						<CurrentConference begin={'10:00'} status={'current'}/>
					</SimpleGrid>
				</Group>
				<Group direction={'column'} style={{marginTop: '50px'}}>
					<Text size={'xl'} color={'#DEE2E6'}>Прошедшие конференции</Text>
					<SimpleGrid cols={3}>
						<CurrentConference begin={'08:30'} end={'8:40'} status={'finished'}/>
						<CurrentConference begin={'09:10'} end={'10:00'} status={'finished'}/>
						<CurrentConference begin={'10:00'} end={'10:30'} status={'finished'}/>
					</SimpleGrid>
				</Group>
			</Container>
		</Center>
	</>

}

export default Conferences