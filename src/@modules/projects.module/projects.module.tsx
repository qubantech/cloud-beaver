import React from 'react'
import { Center, Container, Text, Pagination, SimpleGrid, } from '@mantine/core'
import { ProjectCard } from './components/project-card/project-card.component'
import { Route, Routes, useParams } from 'react-router-dom'
import { ButtonMenu } from './components/button-menu/button-menu.component'


const ProjectsDashboard = () => {
	return <Container mt={'lg'}>
		<ButtonMenu/>
		<SimpleGrid cols={3}>
			{[1, 2, 3, 4, 5, 6, 6, 7, 9, 10].map((key) => (<ProjectCard
				redirect={key.toString()}
				key={key} {...{
					category: 'technology',
					title: 'The best laptop for Frontend engineers in 2022',
					date: 'Feb 6th',
					author: {
						name: 'Олег Лихогуб',
						avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
					}
				}}/>
			))}
		</SimpleGrid >
		<Center mt={'lg'}>
			<Pagination total={10} />
		</Center>
	</Container>
}

const ProjectBoard = () => {

	const { id } = useParams()

	return <Container mt={'lg'}>
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