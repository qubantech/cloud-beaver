import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable'

import SortableItem from './SortableItem'

import {Badge, Group} from '@mantine/core'
import { useStyles } from './droppable.style'

// eslint-disable-next-line react/prop-types
const Droppable = ({ id, items, title, color }) => {
	const { setNodeRef } = useDroppable({ id })

	const { classes, theme } = useStyles()

	return (
		<SortableContext id={ id } items={ items } strategy={ rectSortingStrategy }>
			<Group direction='column' className={classes.list} ref={setNodeRef} style={{margin: '5px',}}>
				<Badge color={ color }>{ title }</Badge>

				{/* eslint-disable-next-line react/prop-types */}
				{items.map((item) => (
					<SortableItem key={item} id={item} />
				))}
			</Group>
		</SortableContext>
	)
}

export default Droppable
