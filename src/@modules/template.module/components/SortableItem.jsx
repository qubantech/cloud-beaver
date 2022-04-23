import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import Item from './Item'

// eslint-disable-next-line react/prop-types
const SortableItem = ({ id }) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
	}

	return (
		<div
			style={style}
			ref={setNodeRef}
			{...attributes}
			{...listeners}
		>
			<Item id={id} />
		</div>
	)
}

export default SortableItem

