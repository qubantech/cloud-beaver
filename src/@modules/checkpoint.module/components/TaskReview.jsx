import React, { useState } from 'react'

import {Badge, Card, Group, Text, Modal} from '@mantine/core'
import TaskModule from '../../task.module/task.module'



// eslint-disable-next-line react/prop-types
const TaskReview = ({id, dragOverlay, title, description, }) => {
	const style = {
		 cursor: dragOverlay ? 'grabbing' : 'grab',
		minWidth: '225px',
	}

	const [opened, setOpened] = useState(false)

	return (
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Introduce yourself!"
			>
				<TaskModule/>
			</Modal>

			<div style={style} >
				<Card shadow="sm" p="lg" onClick={() => setOpened(true)}>
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
		</>
	)
}

export default TaskReview
