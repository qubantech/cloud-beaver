import React, { useState } from 'react'
import { TableOfContents } from './components/table-of-contents/table-of-contents.component'
import { Badge, Button, Card, Center, Container, Divider, Grid, Group, SimpleGrid, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'


export const Notifications = () => {

	const navigate = useNavigate()

	const [active, setActive] = useState('tasks')

	const DATA = [
		{
			title: 'Запланирована конференция',
			description: 'Вы приглашены в конференцию по проекту',
			time: 'Today 2:12',
			link: '/conference/da23wksa2',
			type: 'conferences'
		},
		{
			title: 'Notification title',
			description: 'Notification description about this notification',
			time: 'Today 2:12',
			link: '/conference/da23w',
			type: 'conferences'
		},
		{
			title: 'Notification title',
			description: 'Notification description about this notification',
			time: 'Today 2:12',
			link: '/conference/sdll',
			type: 'conferences'
		},
		{
			title: 'Notification title',
			description: 'Notification description about this notification',
			time: 'Today 2:12',
			link: '/task/ds2a23w',
			type: 'tasks'
		},
		{
			title: 'Notification title',
			description: 'Notification description about this notification',
			time: 'Today 2:12',
			link: '/task/4wda23w',
			type: 'tasks'
		},
		{
			title: 'Notification title',
			description: 'Notification description about this ',
			time: 'Today 2:12',
			link: '/project/s2d1ll',
			type: 'projects'
		},
		{
			title: 'Notification title',
			description: 'Notification description about this notification',
			time: 'Today 2:12',
			link: '/project/sdl3l5',
			type: 'projects'
		},
	]

	const NotificationCard = ({
		title,
		description,
		time,
		link
	}: { title: string, description: string, time: string, link: string }) => {

		const onClick = () => {
			navigate(link)
		}

		return <Card style={{ background: '#323338', cursor: 'pointer' }} onClick={onClick}>
			<Text size={'md'} style={{ lineHeight: '1.4' }}>{title}</Text>
			<Text size={'sm'} style={{ lineHeight: '1.1' }} mt={'xs'}>{description}</Text>
			<Text size={'sm'} style={{ lineHeight: '1.4' }} mt={'xs'}>
				<Badge>
					{time}
				</Badge>
			</Text>
		</Card>
	}

	return <>
		<Container mt={'xl'} style={{
			color: '#c7c7c7',
			fontFamily: 'Greycliff CF'
		}}>
			<Grid columns={16}>
				<Grid.Col span={3}>
					<TableOfContents {...{
						'active': 'tasks',
						'links': [
							{
								'label': 'Задачи',
								'link': 'tasks',
								'order': 1
							},
							{
								'label': 'Проекты',
								'link': 'projects',
								'order': 1
							},
							{
								'label': 'Конференции',
								'link': 'conferences',
								'order': 1
							}
						]
					}}
					active={active}
					setActive={setActive}
					/>
				</Grid.Col>
				<Grid.Col span={13}>
					<Container>
						<Divider my="xs" label="Сегодня" labelPosition="center" />
						<SimpleGrid cols={1} style={{ fontFamily: 'Greycliff CF' }}>
							{
								DATA
									.filter(
										notification => notification.type == active
									)
									.map(
										notification => <NotificationCard key={notification.link} {...notification}/>
									)
							}
						</SimpleGrid>
						<Divider my="xs" label="Вчера" labelPosition="center" />
						<SimpleGrid cols={1} style={{ fontFamily: 'Greycliff CF' }}>
							{
								DATA
									.filter(
										notification => notification.type == active
									)
									.map(
										notification => <NotificationCard key={notification.link} {...notification}/>
									)
							}
						</SimpleGrid>
						<Center m={'xs'}>
							<Button variant={'default'}>Показать более ранние</Button>
						</Center>
					</Container>
				</Grid.Col>
			</Grid>
		</Container>
	</>
}