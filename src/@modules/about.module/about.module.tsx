import { HeroTitle } from './layouts/hero-title.layout'
import { SubGrid } from './layouts/sub-grid.layout'
import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { Container, Grid } from '@mantine/core'
import { ContactForm } from './components/contact-form.component'
import { PreviewCard } from './components/project-preview-card/preview-card.component'

const Welcome = () => {
	return <>
		<HeroTitle/>
		<SubGrid/>
	</>
}

const ProjectOverview = () => {

	const {id} = useParams()

	return <Container>
		<Grid columns={12}>
			<Grid.Col span={8}>
				<ContactForm/>
			</Grid.Col>
			<Grid.Col span={4}>
				<PreviewCard {...{
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
			</Grid.Col>
		</Grid>
	</Container>
}

export const About = () => {
	return <>
		<Routes>
			<Route index element={<Welcome/>}/>
			<Route path={':id'} element={<ProjectOverview/>}/>
		</Routes>
	</>
}