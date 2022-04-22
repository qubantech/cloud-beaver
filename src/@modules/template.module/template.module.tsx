import { Route, Routes, useParams } from 'react-router-dom'
import React from 'react'
import { Container, SimpleGrid } from '@mantine/core'
import { StatsRing } from '../../app.shared/app.layouts/stats-ring.layout'
import { StatsRingCard } from '../../app.shared/app.components/stats-ring-card.component'
import { KanbanBoard } from './components/kanban.component'




const SubRoutingDemo = () => {

	const { id } = useParams()

	return <>
		<Container>
			<StatsRing data={[
				{
					label: 'Sub-routing demo',
					stats: `Route id: ${id}`,
					progress: 23,
					color: 'blue',
					icon: 'down'
				}
			]}/>
		</Container>
	</>
}

const TemplatePage = () => {

	return <>
		<KanbanBoard/>
		<Container>
			<SimpleGrid
				cols={2}
				breakpoints={[
					{ maxWidth: 980, cols: 2, spacing: 'md' },
					{ maxWidth: 680, cols: 1, spacing: 'sm' },
				]}
			>
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
			</SimpleGrid >
		</Container>
	</>
}

export const Template = () => {
	return <Container>
		<Routes>
			<Route path={'/'} element={<TemplatePage/>}/>
			<Route path={':id'} element={<SubRoutingDemo/>}/>
		</Routes>
	</Container>

}