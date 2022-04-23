import React from 'react'

import {Card, Group, Text} from '@mantine/core'

// eslint-disable-next-line react/prop-types
const Item = ({ id, dragOverlay }) => {
	const style = {
		cursor: dragOverlay ? 'grabbing' : 'grab',
	}

	return (
		<div style={style}>
			<Card shadow="sm" p="lg">
				<Group position="apart" style={{ marginBottom: 5 }}>
					<Text weight={500}>Norway Fjord Adventures</Text>
				</Group>

				<Text size="sm" style={{ lineHeight: 1.5 }}>
					Item { id }
				</Text>
			</Card>
		</div>
	)
}

export default Item
