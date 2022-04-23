import React, { useEffect, useState } from 'react'
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
	SimpleGrid, Menu, useMantineTheme, Code, ActionIcon, Checkbox
} from '@mantine/core'
import {
	Adjustments,
	ChevronDown, Download, Edit,
	GitBranch,
	MessageCircle,
	Package,
	Photo,
	Settings,
	SquareCheck
} from 'tabler-icons-react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { ArrowUpRight, ArrowDownRight } from 'tabler-icons-react'
import { RingStats } from './components/ring-stats/ring-stats.component'
import { LateTasksTableView } from './components/late-tasks-table/late-tasks-table.component'
import { Card as MantineCard } from '@mantine/core'
import Checkpoint from './checkpoint.module/checkpoint.module'
import { DatePicker } from '@mantine/dates'
import { useRecoilValue } from 'recoil'
import { UserAuthState } from '../../app.shared/app.state'


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

	const user = useRecoilValue(UserAuthState)
	const navigate = useNavigate()

	const [allowEdit, setAllowEdit] = useState(false)
	const [editDates, setEditDates] = useState(false)

	const [showCheckpointCreate, setShowCheckpointCreate] = useState(false)

	useEffect(() => {
		if (!user) {
			setAllowEdit(false)
			return
		}
		if (user == 'implementer') {
			setAllowEdit(false)
			setShowCheckpointCreate(false)
			return
		}
		if (user == 'manager') {
			setAllowEdit(true)
			setShowCheckpointCreate(true)
			return
		}
	}, [user])

	const ProjectTimings = () => {
		return <>
			<MantineCard mb={'md'} style={{fontFamily: 'Greycliff CF'}}>
				<Grid columns={12}>
					{
						allowEdit && <Grid.Col span={1}>
							<ActionIcon size="xl" radius="xl" onClick={onEditClick}>
								<Edit />
							</ActionIcon>
						</Grid.Col>
					}
					<Grid.Col span={allowEdit && 11 || 12}>
						<SimpleGrid spacing={'xs'}>
							<Group direction={'row'} position={'apart'}>
								<Text>
									Дата начала проекта:
								</Text>
								{
									!editDates
									&& <Code block>21.02.2002</Code>
									|| <DatePicker
										locale="ru"
										defaultValue={new Date()}
									/>
								}
							</Group>
							<Group direction={'row'} position={'apart'}>
								<Text>
									Дата планируемого завершения проекта:
								</Text>
								{
									!editDates
									&& <Code block>21.02.2002</Code>
									|| <DatePicker
										locale="ru"
										defaultValue={new Date()}
									/>
								}
							</Group>
						</SimpleGrid>
					</Grid.Col>
				</Grid>
			</MantineCard>
		</>
	}

	const onEditClick = () => {
		setEditDates(() => !editDates)
	}

	const ManagerReport = () => {
		return <>
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
			<LateTasksTableView/>
		</>
	}

	const ManagerReportCard = () => {
		return <Paper withBorder p="xl" radius="md" style={{fontFamily: 'Greycliff CF'}}>
			<Text style={{
				fontFamily: 'Greycliff CF',
				fontWeight: 600,
				lineHeight: 1,
			}} mb={'md'}>
				Получить отчёт за последний период
			</Text>
			<Group direction={'column'}>
				<Checkbox label="Включить статистику по задачам"/>
				<Checkbox label="Включить прогноз"/>
				<Button color={'gray'} leftIcon={<Download/>}>
					Загрузить отчёт
				</Button>
			</Group>
		</Paper>
	}

	const ManagerPredictedStats = () => {
		return <StatsGridIcons {...{
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
	}

	const ImplementerStats = () => {
		return <>
			<RingStats
				title={'Мои задачи'}
				description={'Текущая контрольная точка: 4'}
				completed={5}
				total={11}
				stats={[
					{
						'value': 2,
						'label': 'Ожидает рассмотрения'
					},
					{
						'value': 1,
						'label': 'В работе'
					}
				]}
			/>
		</>
	}

	const ImplementerTasks = () => {
		return <>
			<LateTasksTableView/>
		</>
	}

	const Checkpoint = () => {

		const DATA: {
			title: string,
			date?: string,
			status: 'completed' | 'late' | 'cancelled' | 'current' | 'planned'
			onClick?: () => void
		}[] = [
			{
				date: '22.01.2023',
				title: 'Поэтапное внедрение государственных информационных ' +
					'систем обеспечения градостроительной деятельности (при ' +
					'необходимости - на базе существующих информационных систем).',
				status: 'completed',
				onClick: () => navigate('1')
			},
			{
				date: '11.02.2023',
				title: 'Поэтапное внедрение государственных информационных ' +
					'систем обеспечения градостроительной деятельности (при ' +
					'необходимости - на базе существующих информационных систем).',
				status: 'completed',
				onClick: () => navigate('2')
			},
			{
				date: '23.02.2023',
				title: 'Поэтапное внедрение государственных информационных ' +
					'систем обеспечения градостроительной деятельности (при ' +
					'необходимости - на базе существующих информационных систем).',
				status: 'late',
				onClick: () => navigate('3')
			},
			{
				date: '14.04.2023',
				title: 'Поэтапное внедрение государственных информационных ' +
					'систем обеспечения градостроительной деятельности (при ' +
					'необходимости - на базе существующих информационных систем).',
				status: 'current',
				onClick: () => navigate('4')
			},
			{
				date: '22.02.2025',
				title: 'Поэтапное внедрение государственных информационных ' +
					'систем обеспечения градостроительной деятельности (при ' +
					'необходимости - на базе существующих информационных систем).',
				status: 'planned',
				onClick: () => navigate('5')
			},
		]

		return <Container mb={'xl'}>
			<Group position={'apart'} direction={'row'}>
				<Title order={3} style={{color: '#cbcbcb', fontFamily: 'Greycliff CF'}} mb={'md'}>
					Контрольные точки
				</Title>
				{
					showCheckpointCreate &&
					<ButtonMenuCreate/>
				}
			</Group>
			<Timeline active={3} bulletSize={24} lineWidth={2}>
				{
					DATA.map(data =>
						<Timeline.Item key={data.date} bullet={<GitBranch size={12}/>} title="Контрольная точка">
							<Card {...data}/>
						</Timeline.Item>
					)
				}
			</Timeline>
		</Container>
	}

	return <Grid columns={12}>
		<Grid.Col span={8}>
			<Title order={1} style={{color: '#cbcbcb', fontFamily: 'Greycliff CF'}} mb={'md'}>
				{projectName}
			</Title>
			<ProjectTimings/>
			<SimpleGrid cols={2}>
				<SimpleGrid cols={1}>
					{
						user == 'manager' &&
						<ManagerReport/>
					}
					{
						user == 'implementer' &&
						<ImplementerStats/>
					}
				</SimpleGrid>
				{
					user == 'manager' &&
					<SimpleGrid>
						<ManagerReportCard/>
						<ManagerPredictedStats/>
					</SimpleGrid>
				}
				{
					user == 'implementer' &&
					<ImplementerTasks/>
				}
			</SimpleGrid>
		</Grid.Col>
		<Grid.Col span={4}>
			<Checkpoint/>
		</Grid.Col>
	</Grid>
}

const ExtendedModeTab = () => {
	return <></>
}

const ReviewTab = () => {
	return <></>
}

const ProjectBoard = () => {

	const user = useRecoilValue(UserAuthState)
	const {id} = useParams()

	return <Container mt={'lg'}>
		<Routes>
			<Route index element={
				<Tabs>
					<Tabs.Tab label="Обзор" icon={<Photo size={14}/>}>
						<OverviewTab projectName={`Проект ${id}`}/>
					</Tabs.Tab>
					{
						user == 'manager' && <>
							<Tabs.Tab label="Расширенный режим" icon={<MessageCircle size={14}/>}>
								<ExtendedModeTab/>
							</Tabs.Tab>
							<Tabs.Tab label="Рассмотрение" icon={<Settings size={14}/>}>
								<ReviewTab/>
							</Tabs.Tab>
						</>
					}
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