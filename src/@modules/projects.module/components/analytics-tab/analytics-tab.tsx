import React, {useEffect, useState} from 'react'
import {Grid, SimpleGrid, Title} from '@mantine/core'
import {Recommendation} from '../recommendation.component'
import {RangedTable} from '../ranged-table'
import {MainMetricWidget} from '../main-metric-widget'
import {useProjectList} from '../../../../app.shared/app.services/app.project.service'
import {Project} from '../../../../app.shared/app.models'

const init =  [
	{
		'title': 'Foundation',
		'iq': 10.2,
		'kpi': 1951,
		'deadline': '20.09.2022',
		'budget': '5 000 000',
	},
	{
		'title': 'Frankenstein',
		'iq': 10.2,
		'kpi': 1951,
		'deadline': '20.09.2022',
		'budget': '5 000 000',
	},
	{
		'title': 'Solaris',
		'iq': 10.2,
		'kpi': 1951,
		'deadline': '20.09.2022',
		'budget': '5 000 000',
	},
	{
		'title': 'Dune',
		'iq': 10.2,
		'kpi': 1951,
		'deadline': '20.09.2022',
		'budget': '5 000 000',
	},
	{
		'title': 'The Left Hand of Darkness',
		'iq': 10.2,
		'kpi': 1951,
		'deadline': '20.09.2022',
		'budget': '5 000 000',
	},
	{
		'title': 'A Scanner Darkly',
		'iq': 10.2,
		'kpi': 1951,
		'deadline': '20.09.2022',
		'budget': '5 000 000',
	}
]

const AnalyticsTab = () => {

	const projects = useProjectList().watchedObject as unknown as [Project]
	const [data, setData] = useState<any>(init)

	useEffect(() => {
		console.log('pr: ' + projects)

		const temp = projects.map((project, index) => {
			return {
				'title': project.title,
				'iq': Math.floor(project.iq * 100) / 100,
				'kpi': 2.3,
				'deadline': '21.01.2024',
				'budget':  Math.floor(project.deltaBudget * 100) / 100
			}
		})
		setData(temp)
		console.log('data: ' + data)

	},[projects])



	// console.log(data)
	return (
		<div>
			<Grid columns={12} gutter={0}>
				<Grid.Col span={8}>
					<SimpleGrid cols={1}>
						<Recommendation/>
						<Title style={{ color: '#FFFFFF' }} order={2}>Проекты</Title>
						<RangedTable {...{
							'data': data
							// 'data': [
							// 	{
							// 		'title': 'Foundation',
							// 		'iq': 10.2,
							// 		'kpi': 1951,
							// 		'deadline': '20.09.2022',
							// 		'budget': '5 000 000',
							// 	},
							// 	{
							// 		'title': 'Frankenstein',
							// 		'iq': 10.2,
							// 		'kpi': 1951,
							// 		'deadline': '20.09.2022',
							// 		'budget': '5 000 000',
							// 	},
							// 	{
							// 		'title': 'Solaris',
							// 		'iq': 10.2,
							// 		'kpi': 1951,
							// 		'deadline': '20.09.2022',
							// 		'budget': '5 000 000',
							// 	},
							// 	{
							// 		'title': 'Dune',
							// 		'iq': 10.2,
							// 		'kpi': 1951,
							// 		'deadline': '20.09.2022',
							// 		'budget': '5 000 000',
							// 	},
							// 	{
							// 		'title': 'The Left Hand of Darkness',
							// 		'iq': 10.2,
							// 		'kpi': 1951,
							// 		'deadline': '20.09.2022',
							// 		'budget': '5 000 000',
							// 	},
							// 	{
							// 		'title': 'A Scanner Darkly',
							// 		'iq': 10.2,
							// 		'kpi': 1951,
							// 		'deadline': '20.09.2022',
							// 		'budget': '5 000 000',
							// 	}
							// ]
						}}/>
					</SimpleGrid>
				</Grid.Col>
				<Grid.Col span={4}>
					<SimpleGrid cols={1}>

					</SimpleGrid>
				</Grid.Col>
			</Grid>
		</div>
	)
}

export default AnalyticsTab