import React from 'react'
import { Container, Timeline, Text, Tabs, Grid, Badge, Paper, Group, ScrollArea, Spoiler } from '@mantine/core'
import { GitBranch, GitCommit, GitPullRequest, MessageCircle, MessageDots, Photo, Settings } from 'tabler-icons-react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'


const ProjectBoard = () => {

	const { id } = useParams()
	const navigate = useNavigate()

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


		return <Paper p={'xs'} onClick={onClick} style={{ cursor: 'pointer' }}>
			<Group direction={'row'}>
				<Text color="dimmed" size="sm" mb={0} style={{ color: '#bbbbbb' }}>
					<Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
					</Spoiler>
					{title}
				</Text>
				<Badge color={statusColor}>
					<Text size="xs" mt={4}>
						{dateTitle}
					</Text>
				</Badge>
			</Group>
		</Paper>
	}

	return <Container mt={'lg'}>
		<Tabs>
			<Tabs.Tab label="Gallery" icon={<Photo size={14}/>}>
				Gallery tab content
			</Tabs.Tab>
			<Tabs.Tab label="Messages" icon={<MessageCircle size={14}/>}>
				Messages tab content
			</Tabs.Tab>
			<Tabs.Tab label="Settings" icon={<Settings size={14}/>}>
				Settings tab content
			</Tabs.Tab>
		</Tabs>
		<Grid columns={12}>
			<Grid.Col span={4}>
				<Container>
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
	</Container>
}


export const Project = () => {

	return <>
		<Routes>
			<Route path={':id'} element={<ProjectBoard/>}/>
		</Routes>
	</>
}