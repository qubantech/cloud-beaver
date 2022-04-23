import React from 'react'
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

const ExtendedModeTab = () => {
	return <></>
}

const ReviewTab = () => {
	return <></>
}

const ProjectBoard = () => {

	const {id} = useParams()

	return <Container mt={'lg'}>
		<Routes>
			<Route index element={
				<Tabs>
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