import React, {useState} from 'react'
import {
	Container,
	Timeline,
	Text,
	Tabs,
	Grid,
	Badge,
	Paper,
	Group,
	Spoiler,
	Button,
	Title,
	createStyles,
	ThemeIcon,
	SimpleGrid, Menu, useMantineTheme
} from '@mantine/core'
import { ChevronDown, GitBranch, MessageCircle, Package, Photo, Settings, SquareCheck } from 'tabler-icons-react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { ArrowUpRight, ArrowDownRight } from 'tabler-icons-react'
import { RingStats } from './components/ring-stats/ring-stats.component'
import { TableView } from './components/table/table.component'
import { Card as MantineCard } from '@mantine/core'
import Checkpoint from './checkpoint.module/checkpoint.module'
import {Chart} from 'react-google-charts'
import './project.css'

const useStyles = createStyles((theme) => ({
	root: {
		padding: 0,
	},

	label: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}))

interface StatsGridIconsProps {
	data: { title: string; value: string; diff: number }[];
}

export function StatsGridIcons({ data }: StatsGridIconsProps) {

	const { classes } = useStyles()
	const stats = data.map((stat) => {

		const DiffIcon = stat.diff > 0 ? ArrowUpRight : ArrowDownRight

		return (
			<Paper withBorder p="md" radius="md" key={stat.title}>
				<Group position="apart">
					<div>
						<Text
							color="dimmed"
							transform="uppercase"
							weight={700}
							size="xs"
							className={classes.label}
						>
							{stat.title}
						</Text>
						<Text weight={700} size="xl">
							{stat.value}
						</Text>
					</div>
					<ThemeIcon
						color="gray"
						variant="light"
						sx={(theme) => ({ color: stat.diff > 0 ? theme.colors.teal[6] : theme.colors.red[6] })}
						size={38}
						radius="md"
					>
						<DiffIcon size={28} />
					</ThemeIcon>
				</Group>
				<Text color="dimmed" size="sm" mt="md">
					<Text component="span" color={stat.diff > 0 ? 'teal' : 'red'} weight={700}>
						{stat.diff}%
					</Text>{' '}
					{stat.diff > 0 ? 'рост' : 'понижение'} в сравнении с предыдущим периодом
				</Text>
			</Paper>
		)
	})

	return (
		<div className={classes.root}>
			<SimpleGrid cols={1}>
				{stats}
			</SimpleGrid>
		</div>
	)
}



const Card = ({
	title,
	date,
	status,
	onClick = () => {return}
}: {
	title: string,
	date?: string,
	status: 'completed' | 'late' | 'cancelled' | 'current' | 'planned'
	onClick?: () => void
}) => {

	const statusColor =
		status == 'completed' ? 'green' :
			status == 'late' ? 'red' :
				status == 'cancelled' ? 'red' :
					status == 'current' ? 'yellow' :
						status == 'planned' ? 'violet' : ''

	const dateTitle =
		status == 'completed' ? `Завершено ${date}` :
			status == 'late' ? 'Задерживается' :
				status == 'cancelled' ? 'Отменено' :
					status == 'current' ? `В работе с ${date}` :
						status == 'planned' ? `Запланировано на ${date}` : ''


	return <Paper p={'xs'} style={{ cursor: 'pointer' }}>
		<SimpleGrid cols={1}>
			<Text color="dimmed" size="sm" mb={0} style={{ color: '#bbbbbb' }}>
				<Spoiler maxHeight={42} showLabel="Подробнее" hideLabel="Свернуть">
					{title}
				</Spoiler>
			</Text>
			<Group position={'apart'}>
				<Badge color={statusColor}>
					<Text size="xs" mt={4}>
						{dateTitle}
					</Text>
				</Badge>
				<Button size={'xs'} color={'gray'} onClick={onClick}>
					Смотреть
				</Button>
			</Group>
		</SimpleGrid>
	</Paper>
}

export function ButtonMenuCreate() {

	const theme = useMantineTheme()

	return (
		<Menu
			control={
				<Button rightIcon={<ChevronDown size={18} />} sx={{ paddingRight: 12 }}>
					Добавить
				</Button>
			}
			transition="pop-top-right"
			placement="end"
			size="lg"
		>
			<Menu.Item icon={<Package size={16} color={theme.colors.blue[6]} />}>
				Контрольная точка
			</Menu.Item>
			<Menu.Item icon={<SquareCheck size={16} color={theme.colors.pink[6]} />}>
				Конференция
			</Menu.Item>
		</Menu>
	)
}

const ButtonMenuSettings = () => {

	const theme = useMantineTheme()

	return <Menu
		control={
			<Button rightIcon={<ChevronDown size={18} />} sx={{ paddingRight: 12 }}>
				Добавить
			</Button>
		}
		transition="pop-top-right"
		placement="end"
		size="lg"
	>
		<Menu.Item icon={<Package size={16} color={theme.colors.blue[6]} />}>
			Контрольная точка
		</Menu.Item>
		<Menu.Item icon={<SquareCheck size={16} color={theme.colors.pink[6]} />}>
			Конференция
		</Menu.Item>
	</Menu>
}


const OverviewTab = ({projectName}: {projectName: string}) => {

	const navigate = useNavigate()

	return <Grid columns={12}>
		<Grid.Col span={8}>
			<Title order={1} style={{color: '#cbcbcb', fontFamily: 'Greycliff CF'}} mb={'md'}>
				{projectName}
			</Title>
			<MantineCard mb={'md'} style={{fontFamily: 'Greycliff CF'}}>
				<Group>
					<Text>
						Дата начала проекта:
					</Text>
				</Group>
				<Group>
					<Text>
						Дата планируемого завершения проекта:
					</Text>
				</Group>
			</MantineCard>
			<SimpleGrid cols={2}>
				<SimpleGrid cols={1}>
					<RingStats
						title={'Статистика по задачам'}
						description={'Текущая контрольная точка: 4'}
						completed={45}
						total={147}
						stats={[
							{
								'value': 26,
								'label': 'Ожидает рассмотрения'
							},
							{
								'value': 76,
								'label': 'В работе'
							}
						]}
					/>
					<TableView/>
				</SimpleGrid>
				<StatsGridIcons {...{
					data: [
						{
							title: 'Вклад контрольной точки в IQ за последнй год',
							value: '+12.31 IQ',
							diff: 34
						},
						{
							title: 'Прогноз вклада в следующий период',
							value: '-2.91 IQ',
							diff: -23
						},
					]
				}}/>
			</SimpleGrid>
		</Grid.Col>
		<Grid.Col span={4}>
			<Container mb={'xl'}>
				<Group position={'apart'} direction={'row'}>
					<Title order={3} style={{color: '#cbcbcb', fontFamily: 'Greycliff CF'}} mb={'md'}>
						Контрольные точки
					</Title>
					<ButtonMenuCreate/>
				</Group>
				<Timeline active={3} bulletSize={24} lineWidth={2}>
					<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка">
						<Card date={'22.02.2023'}
							  title={'Поэтапное внедрение государственных информационных систем обеспечения градостроительной деятельности (при необходимости - на базе существующих информационных систем).'}
							  status={'completed'}
							  onClick={() => navigate('1')}
						/>
					</Timeline.Item>
					<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка">
						<Card date={'22.02.2023'}
							  title={'Поэтапное внедрение государственных информационных систем обеспечения градостроительной деятельности (при необходимости - на базе существующих информационных систем).'}
							  status={'completed'}
							  onClick={() => navigate('2')}
						/>
					</Timeline.Item>
					<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка">
						<Card date={'22.02.2023'}
							  title={'Поэтапное внедрение государственных информационных систем обеспечения градостроительной деятельности (при необходимости - на базе существующих информационных систем).'}
							  status={'late'}
							  onClick={() => navigate('3')}
						/>
					</Timeline.Item>
					<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка">
						<Card date={'22.02.2023'}
							  title={'Поэтапное внедрение государственных информационных систем обеспечения градостроительной деятельности (при необходимости - на базе существующих информационных систем).'}
							  status={'current'}
							  onClick={() => navigate('4')}
						/>
					</Timeline.Item>
					<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка">
						<Card date={'22.02.2023'}
							  title={'Поэтапное внедрение государственных информационных систем обеспечения градостроительной деятельности (при необходимости - на базе существующих информационных систем).'}
							  status={'planned'}/>
					</Timeline.Item>
				</Timeline>
			</Container>
		</Grid.Col>
	</Grid>
}


const columns = [
	{ type: 'string', label: 'Checkpoint name' },
	{ type: 'string', label: 'Task name' },
	{ type: 'string', label: 'Resource' },
	{ type: 'date', label: 'Start Date' },
	{ type: 'date', label: 'End Date' },
	{ type: 'number', label: 'Duration' },
	{ type: 'number', label: 'Percent Complete' },
	{ type: 'string', label: 'Dependencies' }
]

const rows = [
	[
		'task1',
		'Внедрение системы управления\nгородским парковочным пространством',
		'resource1',
		new Date(2015, 0, 1),
		new Date(2015, 1, 1),
		null,
		100,
		null
	],
	[
		'task2',
		'Многоуровневые автоматизированные\n парковки',
		'resource1',
		new Date(2015, 0, 25),
		new Date(2015, 2, 3),
		null,
		100,
		'task1'
	],
	[
		'task3',
		'"Стереогараж" механизированная система\nпарковки',
		'resource1',
		new Date(2015, 1, 25),
		new Date(2015, 4, 20),
		null,
		100,
		'task2'
	],
	[
		'task4',
		'Внедрение системы отслеживания \nпередвижения общественного транспорта',
		'resource2',
		new Date(2015, 2, 1),
		new Date(2015, 2, 20),
		null,
		100,
		'task2'
	],
	[
		'task5',
		'Дистанционное оповещение граждан',
		'resource2',
		new Date(2015, 2, 20),
		new Date(2015, 3, 5),
		null,
		100,
		'task4'
	],
	[
		'task6',
		'Внедрение единой системы оплаты \nпроезда в общественном транспорте,',
		'resource2',
		new Date(2015, 2, 27),
		new Date(2015, 4, 1),
		null,
		70,
		'task4'
	],
	[
		'task7',
		'Система организации льготного проезда',
		'resource2',
		new Date(2015, 2, 28),
		new Date(2015, 4, 15),
		null,
		30,
		'task4'
	],
	[
		'task8',
		'Обеспечение безопасных и комфортных \nмест ожидания общественного транспорта',
		'resource3',
		new Date(2015, 4, 10),
		new Date(2015, 5, 30),
		null,
		0,
		'task7'
	],
	[
		'task9',
		'Оборудование безопасных и комфортных \nмест ожидания общественного транспорта',
		'resource3',
		new Date(2015, 4, 25),
		new Date(2015, 6, 1),
		null,
		0,
		'task7'
	],
	[
		'task10',
		'Мониторинг состояния дорожного полотна ',
		'resource4',
		new Date(2015, 4, 20),
		new Date(2015, 6, 30),
		null,
		0,
		'task7'
	]



]

const data = [columns, ...rows]

const options = {
	height: 450,
	backgroundColor:{
		//@ts-ignore
		fill: '#141517'
	},
	gantt: {
		palette: [
			{
				'color': '#5F3DC4',
				'dark': '#2a56c6',
				'light': '#c6dafc'
			},
			{
				'color': '#C92A2A',
				'dark': '#a52714',
				'light': '#f4c7c3'
			},
			{
				'color': '#862E9C',
				'dark': '#862E9C',
				'light': '#fce8b2'
			},
			{
				'color': '#0f9d58',
				'dark': '#0b8043',
				'light': '#b7e1cd'
			},
			{
				'color': '#E67700',
				'dark': '#6a1b9a',
				'light': '#e1bee7'
			},
			{
				'color': '#00acc1',
				'dark': '#00838f',
				'light': '#b2ebf2'
			},
			{
				'color': '#ff7043',
				'dark': '#e64a19',
				'light': '#ffccbc'
			},
			{
				'color': '#9e9d24',
				'dark': '#827717',
				'light': '#f0f4c3'
			},
			{
				'color': '#5c6bc0',
				'dark': '#3949ab',
				'light': '#c5cae9'
			},
			{
				'color': '#f06292',
				'dark': '#e91e63',
				'light': '#f8bbd0'
			},
			{
				'color': '#00796b',
				'dark': '#004d40',
				'light': '#b2dfdb'
			},
			{
				'color': '#c2185b',
				'dark': '#880e4f',
				'light': '#f48fb1'
			}
		],
		labelStyle: {
			fontSize:14,
			color: 'white'
		},
		criticalPathEnabled: false,
		innerGridHorizLine: {
			stroke: '#343A40',
			strokeWidth: 2
		},
		percentStyle: {fill: '#00796b'},
		innerGridTrack: {fill: '#E7F5FF'},
		innerGridDarkTrack: {fill: '#ADB5BD'}
	}
}

const ExtendedModeTab = () => {
	return <>
		<Title align={'center'} order={1} style={{color: '#cbcbcb', fontFamily: 'Greycliff CF'}} mb={'md'}>
			Диаграмма Ганта по текущим задачам
		</Title>
		<Chart chartType="Gantt"
			   width="100%"
			   height="450px"
			   data={data}
			// @ts-ignore
			   options={options}
			   className={'gantt'}
		/>
		<Grid>
			<Grid.Col span={6} pb={40}>
				<Title order={3} style={{color: '#cbcbcb', fontFamily: 'Greycliff CF'}}>
					Ход работы
				</Title>
				<Timeline pt={20} active={3} bulletSize={24} lineWidth={2}>
					<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка 1">
						<Card date={'10.02.2022'}
							  title={'Создание системы администрирования городского парковочного пространства'}
							  status={'completed'}
						/>
					</Timeline.Item>
					<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка 2">
						<Card date={'22.03.2022'}
							  title={'Интеллектуальное управление городским общественным транспортом'}
							  status={'completed'}
						/>
					</Timeline.Item>
					<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка 3">
						<Card date={'22.04.2022'}
							  title={'Создание безопасных и комфортных мест ожидания общественного транспорта'}
							  status={'current'}
						/>
					</Timeline.Item>
					<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка 4">
						<Card date={'10.08.2022'}
							  title={'Создание системы мониторинга состояния дорожного полотна'}
							  status={'planned'}
						/>
					</Timeline.Item>
				</Timeline>
			</Grid.Col>
			<Grid.Col span={6}>
				<TableView/>
			</Grid.Col>
		</Grid>
	</>
}

const ReviewTab = () => {
	return <></>
}

const ProjectBoard = () => {

	const {id} = useParams()
	const [ activeTab, setActiveTab ] = useState(0)

	return <Container mt={'lg'}>
		<Routes>
			<Route index element={
				<Tabs active={activeTab} onTabChange={setActiveTab}>
					<Tabs.Tab label="Обзор" icon={<Photo size={14}/>}>
						<OverviewTab projectName={`Проект ${id}`}/>
					</Tabs.Tab>
					<Tabs.Tab label="Расширенный режим" icon={<MessageCircle size={14}/>}>
						<ExtendedModeTab/>
					</Tabs.Tab>
					<Tabs.Tab label="Рассмотрение" icon={<Settings size={14}/>}>
						<ReviewTab/>
					</Tabs.Tab>
				</Tabs>
			}/>
			<Route path={':id'} element={<Checkpoint/>}/>
		</Routes>
	</Container>
}


export const Project = () => {
	return <>
		<Routes>
			<Route path={':id/*'} element={<ProjectBoard/>}/>
		</Routes>
	</>
}