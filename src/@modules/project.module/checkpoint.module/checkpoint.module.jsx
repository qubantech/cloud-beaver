import React, {useEffect, useState} from 'react'
import {ActionIcon, Container, Grid, Group, Text, Title, Drawer, Spoiler, ThemeIcon, Card, Button} from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import { Project } from '../project.module'

import {
	DndContext,
	DragOverlay,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'

import Droppable from './components/Droppable'
import TaskReview from './components/TaskReview'
import { arrayMove, insertAtIndex, removeAtIndex } from './utils/array'
import {useParams} from 'react-router-dom'
import {Chat} from '../../projects.module/layouts/chat.layout/chat.component'
import {ArrowBigRightLines, BrandHipchat, LayoutGridAdd, Man, MoodSmile} from 'tabler-icons-react'

// eslint-disable-next-line react/prop-types
export const Kanban = () => {
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
		'Done': {
			title: 'Завершено',
			items: ['10'],
			color: 'green'
		}
	})

	const [activeId, setActiveId] = useState(null)

	const sensors = useSensors(
		useSensor(MouseSensor,{activationConstraint: {
			delay: 100
		}}),
		useSensor(TouchSensor,{activationConstraint: {
			delay: 100
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
			<Container>
				<Group direction={'row'} position={'center'} spacing={0}>
					{Object.keys(itemGroups).map((group) => (
						<div key={group} style={{ alignSelf: 'start'}}>
							<Droppable
								id={group}
								items={itemGroups[group].items}
								activeId={activeId}
								title={itemGroups[group].title}
								color={itemGroups[group].color}
							/>
						</div>
					))}
				</Group>
			</Container>
			<DragOverlay>{activeId ? <TaskReview id={activeId} title={ 'Название задания' } description={ 'Описание' } dragOverlay/> : null}</DragOverlay>
		</DndContext>
	)
}

const checkpointProps = {
	title: 'Название чекпоинта',
	controllers: ['Путров Т.В.', 'Иванов Ф.П.', 'Сидоров Ф.Ш.','Иванов Ф.П.', 'Сидоров Ф.Ш.','Иванов Ф.П.', 'Сидоров Ф.Ш.'],
	documents: [],
	report: '',
	conferences: [],
	tasks: [],
	iq: 1,
	status: ''
}
const Checkpoint = () => {
	const [descriptionOpened, setDescriptionOpened] = useState(false)

	const DescriptionDrawer = () => (
		<Card shadow="sm" p="lg">
			<Group spacing={5} style={{marginBottom: '20px'}}>
				<Text weight={700}>Менеджеры чекпоинта</Text>
			</Group>
			<Spoiler maxHeight={170} showLabel="Подробнее" hideLabel="Свернуть">
				<Group direction={'column'} spacing={10} style={{width: '100%'}}>
					{
						checkpointProps.controllers.map((c, index) => (
							<Card key={index} style={{backgroundColor: '#373A40', padding: '10px', width: '100%'}}>
								<Group direction={'row'} spacing={5}>
									<ThemeIcon variant={'outline'} size={'md'}>
										<MoodSmile size={17}/>
									</ThemeIcon>
									<Text>{ c }</Text>
								</Group>

							</Card>
						))
					}
				</Group>
			</Spoiler>
		</Card>
	)

	const [chatOpened, setChatOpened] = useState(false)

	return (
		<Container>
			<Drawer
				opened={descriptionOpened}
				onClose={() => setDescriptionOpened(false)}
				title={ checkpointProps.title }
				padding="lg"
				size="lg"
			>
				 <DescriptionDrawer/>
			</Drawer>

			<Drawer
				opened={chatOpened}
				onClose={() => setChatOpened(false)}
				position={'right'}
				padding="lg"
				size="xl"
				title={
					<Group position={'apart'} style={{width: '100%'}}>
						<Group>
							<Button compact>Участники</Button>
							<Button compact>Вложения</Button>
						</Group>
					</Group>
				}
			>
				<div style={{maxWidth: '500px', height: '90vh', borderColor: '#5C5F66', borderRadius: '8px' }}>
					<Chat/>
				</div>
			</Drawer>

			<Group position={'apart'} style={{marginBottom: '20px'}}>
				<Group>
					<ActionIcon color={'blue'}  variant={'outline'} size={'lg'} onClick={() => {setDescriptionOpened(true)}}>
						<ArrowBigRightLines size={20}/>
					</ActionIcon>
					<Text size={'xl'} color={'#CED4DA'} weight={400}>{ checkpointProps.title }</Text>
				</Group>
				<Group>
					<div style={{width: '220px'}}>
						<Button fullWidth variant={'outline'} leftIcon={<LayoutGridAdd/>}>
							Добавить задание
						</Button>
					</div>
					<div style={{width: '120px'}}>
						<Button fullWidth variant={'outline'} leftIcon={<BrandHipchat/>} onClick={() => setChatOpened(true)}>
							Чат
						</Button>
					</div>

				</Group>
			</Group>
			<Kanban/>
		</Container>
	)
}

export default Checkpoint