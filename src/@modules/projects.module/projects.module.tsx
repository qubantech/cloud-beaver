import React, { useState } from 'react'
import {
	Center,
	Container,
	Text,
	Pagination,
	SimpleGrid,
	Tabs,
	Divider,
	Grid,
	Group,
	Title, Accordion, Paper, Button
} from '@mantine/core'
import { DateRangePicker } from '@mantine/dates'
import { Route, Routes, useParams } from 'react-router-dom'
import { MessageCircle, Photo, Settings } from 'tabler-icons-react'
import { StatsRingCard } from '../../app.shared/app.components/stats-ring-card.component'
import {
	ProjectCard,
	ButtonMenu,
	StatsSegments,
	ProjectPreviewCard,
	MetricsPreview,
	RangedTable,
	Recommendation,
	MainMetricWidget
} from './components'


const ProjectsContainer = () => {

	return <>
		<SimpleGrid cols={3}>
			{
				[1, 2, 3, 4, 5, 6, 6, 7, 8].map((key) => (<ProjectCard
					redirect={key.toString()}
					key={key} {...{
						category: 'Технологии',
						title: 'Создание цифрового двойника города',
						date: 'До 31.12.2024',
						department: 'Отдел информационных технологий'
					}}/>
				))
			}
		</SimpleGrid >
		<Center mt={'lg'}>
			<Pagination total={10} />
		</Center>
	</>
}

const OverviewTab = () => {

	return <>
		<Container my="md">
			<Grid columns={12} gutter={28}>
				<Grid.Col span={8}>
					<Group position={'apart'} my={'xs'}>
						<Title style={{color: '#FFFFFF'}} order={2}>
							Проекты
						</Title>
						<ButtonMenu/>
					</Group>
					<ProjectsContainer/>
				</Grid.Col>
				<Grid.Col span={4}>
					<StatsSegments
						{...{
							total: '117,75',
							diff: 18,
							data: [
								{
									label: 'Закрыто в срок',
									count: '204',
									part: 59,
									color: '#1cabe5'
								},
								{
									label: 'Превышен срок',
									count: '110',
									part: 35,
									color: '#eab86c'
								},
								{
									label: 'Отменено',
									count: '31',
									part: 6,
									color: '#be1b34'
								}
							]
						}}
					/>
					<Divider my="xs" label="Краткая сводка" labelPosition="center" />
					<ProjectPreviewCard {...{
						image:
							'https://admnvrsk.ru/upload/resize_cache/iblock/97c/865_497_2/97cb010aa3a97f724bed2dead73860b2.jpg',
						title: 'Создание "Цифрового двойника города"',
						description:
							'МБУ ""АПК Безопасный город - ЕДДС""\n' +
							'Управление транспорта и дорожного хозяйства\n' +
							'Управление культуры\n' +
							'Управление образования\n' +
							'Управление по физической культуре и спорту\n' +
							'Отдел экологической безопасности\n' +
							'Отдел по курортам и туризму\n',
						badges: [
							{
								'emoji': '☀️',
								'label': 'Sunny weather'
							},
							{
								'emoji': '🦓',
								'label': 'Onsite zoo'
							},
							{
								'emoji': '🌊',
								'label': 'Sea'
							}
						]
					}}/>
				</Grid.Col>
			</Grid>
		</Container>
	</>
}

const InfoTab = () => {

	const [date, setDate] = useState<[Date | null, Date | null]>([
		new Date(2021, 11, 1),
		new Date(2021, 11, 5),
	])

	return <>
		<Grid columns={12} gutter={28}>
			<Grid.Col span={4}>
				<SimpleGrid cols={1}>
					<StatsRingCard
						title={'Stats'}
						completed={45}
						total={100}
						stats={[
							{
								'value': 447,
								'label': 'Remaining'
							},
							{
								'value': 76,
								'label': 'In progress'
							}
						]}
					/>
					<MetricsPreview {...{
						'image': 'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
						'title': 'Running challenge',
						'description': '56 km this month • 17% improvement compared to last month • 443 place in global scoreboard',
						'stats': [
							{
								'title': 'Distance',
								'value': '27.4 km'
							},
							{
								'title': 'Avg. speed',
								'value': '9.6 km/h'
							},
							{
								'title': 'Score',
								'value': '88/100'
							}
						]
					}}/>
				</SimpleGrid>
			</Grid.Col>
			<Grid.Col span={8}>
				<SimpleGrid cols={1}>
					<Paper shadow="xs" p="md">
						<Group direction={'column'}>
							<DateRangePicker
								label="Book hotel"
								placeholder="Pick dates range"
								value={date}
								onChange={setDate}
							/>
							<Button variant="outline" >
								Скачать отчёт
							</Button>
						</Group>
					</Paper>
					<Paper shadow="xs" p="md">
						<Accordion>
							<Accordion.Item label="Customization">
								Colors, fonts, shadows and many other parts are customizable to fit your design needs
							</Accordion.Item>
							<Accordion.Item label="Flexibility">
								Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
							</Accordion.Item>
							<Accordion.Item label="No annoying focus ring">
								With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
							</Accordion.Item>
						</Accordion>
					</Paper>
				</SimpleGrid>
			</Grid.Col>
		</Grid>

	</>
}

const AnalyticsTab = () => {

	return <>
		<Grid columns={ 12 } gutter={0}>
			<Grid.Col span={8}>
				<SimpleGrid cols={1}>
					<Recommendation/>
					<Title style={{color: '#FFFFFF'}} order={2}>Проекты</Title>
					<RangedTable {...{
						'data': [
							{
								'title': 'Foundation',
								'author': 'Isaac Asimov',
								'year': 1951,
								'reviews': {
									'positive': 2223,
									'negative': 259
								}
							},
							{
								'title': 'Frankenstein',
								'author': 'Mary Shelley',
								'year': 1818,
								'reviews': {
									'positive': 5677,
									'negative': 1265
								}
							},
							{
								'title': 'Solaris',
								'author': 'Stanislaw Lem',
								'year': 1961,
								'reviews': {
									'positive': 3487,
									'negative': 1845
								}
							},
							{
								'title': 'Dune',
								'author': 'Frank Herbert',
								'year': 1965,
								'reviews': {
									'positive': 8576,
									'negative': 663
								}
							},
							{
								'title': 'The Left Hand of Darkness',
								'author': 'Ursula K. Le Guin',
								'year': 1969,
								'reviews': {
									'positive': 6631,
									'negative': 993
								}
							},
							{
								'title': 'A Scanner Darkly',
								'author': 'Philip K Dick',
								'year': 1977,
								'reviews': {
									'positive': 8124,
									'negative': 1847
								}
							}
						]
					}}/>
				</SimpleGrid>
			</Grid.Col>
			<Grid.Col span={4}>
				<SimpleGrid cols={1}>
					<MainMetricWidget {...{
						'data': [
							{
								'title': 'Revenue',
								'icon': 'receipt',
								'value': '13,456',
								'diff': 34
							},
							{
								'title': 'Profit',
								'icon': 'coin',
								'value': '4,145',
								'diff': -13
							},
							{
								'title': 'Coupons usage',
								'icon': 'discount',
								'value': '745',
								'diff': 18
							},
							{
								'title': 'New customers',
								'icon': 'user',
								'value': '188',
								'diff': -30
							}
						]
					}}/>
				</SimpleGrid>
			</Grid.Col>
		</Grid>
	</>
}

const ProjectsDashboard = () => {

	const [activeTab, setActiveTab] = useState(0)

	return <Container mt={'lg'}>
		<Tabs active={activeTab} onTabChange={setActiveTab} >
			<Tabs.Tab label="Обзор" icon={<Photo size={14} />}>
				<OverviewTab/>
			</Tabs.Tab>
			<Tabs.Tab label="Инфографика" icon={<MessageCircle size={14} />}>
				<InfoTab/>
			</Tabs.Tab>
			<Tabs.Tab label="Аналитика" icon={<Settings size={14} />}>
				<AnalyticsTab/>
			</Tabs.Tab>
		</Tabs>
	</Container>
}

const ProjectBoard = () => {

	const { id } = useParams()

	return <Container mt={'lg'}>
		<Tabs>
			<Tabs.Tab label="Gallery" icon={<Photo size={14} />}>
				Gallery tab content
			</Tabs.Tab>
			<Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>
				Messages tab content
			</Tabs.Tab>
			<Tabs.Tab label="Settings" icon={<Settings size={14} />}>
				Settings tab content
			</Tabs.Tab>
		</Tabs>
		<Text size="sm" mt="sm" color="dimmed">
			{id}
		</Text>
	</Container>
}


export const Projects = () => {

	return (
		<Routes>
			<Route index element={<ProjectsDashboard/>}/>
			<Route path={':id'} element={<ProjectBoard/>}/>
		</Routes>
	)
}