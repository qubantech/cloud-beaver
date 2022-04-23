import React from 'react'

import {Badge, Card, Group, Text} from '@mantine/core'


// eslint-disable-next-line react/prop-types
const Task = ({id, dragOverlay, title, description, }) => {
	const style = {
		cursor: dragOverlay ? 'grabbing' : 'grab',
		minWidth: '225px',
	}

	return (
		<div style={style} onClick={ () => {return} }>
			<Card shadow="sm" p="lg">
				<Group position="apart" style={{ marginBottom: 5 }}>
					<Text weight={ 500 }>{ title }</Text>
				</Group>

				<Text size="sm" style={{ lineHeight: 1.5 }}>
					{ description }
				</Text>

				<Group direction={ 'column' } spacing={3} style={{marginTop: '10px'}}>
					<Text size="sm" >
						Дата начала: <Badge color={'cyan'}>20.02.2002</Badge>
					</Text>
					<Text size="sm" >
						Дата конца: <Badge color={'cyan'}>20.02.2002</Badge>
					</Text>
				</Group>
			</Card>
		</div>
	)
}

export default Task
