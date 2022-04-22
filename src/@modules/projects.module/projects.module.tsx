import React from 'react'
import { Center, Container, Grid, Pagination, SimpleGrid, } from '@mantine/core'
import { ProjectCard } from './components/project-card.component'


export const Projects = () => {

	return (
		<Container mt={'lg'}>
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
	)
}