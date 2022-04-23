import React, { useState } from 'react'
import {
	DndContext,
	DragOverlay,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'

import Droppable from './Droppable'
import Item from './Item'
import { arrayMove, insertAtIndex, removeAtIndex } from '../utils/array'


export const KanbanBoard = () => {
	const [itemGroups, setItemGroups] = useState({
		'В планах': {
			items: ['1', '2', '3'],
			color: 'red'
		},
		'В процессе': {
			items: ['4','5'],
			color: 'yellow'
		},
		'На рассмотрении': {
			items: ['7', '8', '9'],
			color: 'blue'
		},
		'Завершено': {
			items: ['10'],
			color: 'green'
		}
	})
	const [activeId, setActiveId] = useState(null)

	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(TouchSensor),
	)

	const handleDragStart = ({ active }) => setActiveId(active.id)

	const handleDragCancel = () => setActiveId(null)

	const handleDragOver = ({ active, over }) => {
		const overId = over?.id

		if (!overId) {
			return
		}

		const activeContainer = active.data.current.sortable.containerId
		const overContainer = over.data.current?.sortable.containerId || over.id

		if (activeContainer !== overContainer) {
			setItemGroups((itemGroups) => {
				const activeIndex = active.data.current.sortable.index
				const overIndex =
					over.id in itemGroups
						? itemGroups[overContainer].items.length + 1
						: over.data.current.sortable.index

				return moveBetweenContainers(
					itemGroups,
					activeContainer,
					activeIndex,
					overContainer,
					overIndex,
					active.id
				)
			})
		}
	}

	const handleDragEnd = ({ active, over }) => {
		if (!over) {
			setActiveId(null)
			return
		}

		if (active.id !== over.id) {
			const activeContainer = active.data.current.sortable.containerId
			const overContainer = over.data.current?.sortable.containerId || over.id
			const activeIndex = active.data.current.sortable.index
			const overIndex =
				over.id in itemGroups
					? itemGroups[overContainer].items.length + 1
					: over.data.current.sortable.index

			setItemGroups((itemGroups) => {
				let newItems
				if (activeContainer === overContainer) {
					newItems = {
						...itemGroups,
						[overContainer]: {
							items: arrayMove(
								itemGroups[overContainer].items,
								activeIndex,
								overIndex
							),
							color: itemGroups[overContainer].color
						}
					}
				} else {
					newItems = moveBetweenContainers(
						itemGroups,
						activeContainer,
						activeIndex,
						overContainer,
						overIndex,
						active.id
					)
				}

				return newItems
			})
		}

		setActiveId(null)
	}

	const moveBetweenContainers = (
		items,
		activeContainer,
		activeIndex,
		overContainer,
		overIndex,
		item
	) => {
		return {
			...items,
			[activeContainer]:{
				items: removeAtIndex(items[activeContainer].items, activeIndex),
				color: itemGroups[activeContainer].color
			},
			[overContainer]: {
				items: insertAtIndex(items[overContainer].items, overIndex, item),
				color: itemGroups[overContainer].color
			}
		}
	}

	return (
		<DndContext
			sensors={sensors}
			onDragStart={handleDragStart}
			onDragCancel={handleDragCancel}
			onDragOver={handleDragOver}
			onDragEnd={handleDragEnd}
		>
			<div className="container" style={{display: 'flex', margin: '5px'}}>
				{Object.keys(itemGroups).map((group) => (
					<Droppable
						id={group}
						items={itemGroups[group].items}
						activeId={activeId}
						key={group}
						title={group}
						color={itemGroups[group].color}
					/>
				))}
			</div>
			<DragOverlay>{activeId ? <Item id={activeId} dragOverlay/> : null}</DragOverlay>
		</DndContext>
	)
}