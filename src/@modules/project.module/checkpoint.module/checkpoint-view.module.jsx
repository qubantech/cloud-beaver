import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { DndContext, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, insertAtIndex, removeAtIndex } from './utils/array'
import { Container, Group, SimpleGrid } from '@mantine/core'
import Droppable from './components/Droppable'
import TaskReview from './components/TaskReview'
import DroppableView from './components/DroppableView'


const KanbanView = () => {
	const { id } = useParams()

	const [itemGroups, setItemGroups] = useState({
		'Planned': {
			title: 'В планах',
			items: ['1', '2', '3'],
			color: 'red'
		},
		'In progress': {
			title: 'В процессе',
			items: ['4','5'],
			color: 'yellow'
		},
		'To review': {
			title: 'На рассмотрении',
			items: ['7', '8', '9'],
			color: 'blue'
		},
	})

	const [activeId, setActiveId] = useState(null)

	const sensors = useSensors(
		useSensor(MouseSensor,{activationConstraint: {
			delay: 150
		}}),
		useSensor(TouchSensor,{activationConstraint: {
			delay: 150
		}}),

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
							title: itemGroups[overContainer].title,
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
				title: itemGroups[activeContainer].title,
				items: removeAtIndex(items[activeContainer].items, activeIndex),
				color: itemGroups[activeContainer].color
			},
			[overContainer]: {
				title: itemGroups[overContainer].title,
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
			<SimpleGrid cols={3} spacing={'xs'}>
				{Object.keys(itemGroups).map((group) => (
					<div key={group} style={{ alignSelf: 'start'}}>
						<DroppableView
							id={group}
							items={itemGroups[group].items}
							activeId={activeId}
							title={itemGroups[group].title}
							color={itemGroups[group].color}
						/>
					</div>
				))}
			</SimpleGrid>
			<DragOverlay>{activeId ? <TaskReview id={activeId} title={ 'Название задания' } description={ 'Описание' } dragOverlay/> : null}</DragOverlay>
		</DndContext>
	)
}


export const CheckpointView = () => {
	return <KanbanView/>
}
