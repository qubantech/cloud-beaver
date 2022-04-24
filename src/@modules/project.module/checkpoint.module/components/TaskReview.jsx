import React, { useState } from 'react'

import {Badge, Card, Group, Text, Modal, SimpleGrid} from '@mantine/core'
import TaskModal from './TaskModal'

// eslint-disable-next-line react/prop-types
const TaskReview = ({id, dragOverlay, title, description, status, color }) => {
	const style = {
		cursor: dragOverlay ? 'grabbing' : 'grab',
		minWidth: '280px',
	}

	const [opened, setOpened] = useState(false)

	const CheckpointDescription = () => {
		return (
			<>

			</>
		)
	}

	return (
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				size={'xl'}
				title={
					<Group>
						<Text>{ title }</Text>
						<Badge color={ color }>{ status }</Badge>
					</Group>
				}
			>
				<TaskModal
					title={ title }
					description={ description }
					status={ status }
				/>
			</Modal>

			<div style={style} >
				<Card shadow="sm" p="lg" onClick={() => setOpened(true)}>
					<Group position="apart" style={{ marginBottom: 5 }}>
						<Text weight={ 500 }>{ title }</Text>
					</Group>

					<Text size="sm" style={{ lineHeight: 1.5 }}>
						{ description }
					</Text>

					<Group direction={ 'column' } spacing={3} style={{marginTop: '10px', width: '100%'}}>
						<Group position='apart' style={{ width: '100%' }}>
							<Text size="sm" >
								Дата начала:
							</Text>
							<Badge color={'cyan'}>20.02.2002</Badge>
						</Group>

						<Group position='apart' style={{ width: '100%' }}>
							<Text size="sm" >
								Дата конца:
							</Text>
							<Badge color={'cyan'}>20.02.2002</Badge>
						</Group>
					</Group>
				</Card>
			</div>
		</>
	)
}

export default TaskReview
