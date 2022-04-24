import React, { useState } from 'react'
import { Badge, Button, Card, Center, Container, Group, Modal, SimpleGrid, Spoiler, Text, ThemeIcon } from '@mantine/core'
import { MoodSmile} from 'tabler-icons-react'

const Conferences = () => {

	const [modalOpened, setModalOpened] = useState(false)

	const participants = [
		'Петров А.А.',
		'Иванов В.Р.',
		'Сидоров К.И.',
		'Петров А.А.',
		'Иванов В.Р.',
		'Сидоров К.И.'
	]

	const onOpenChat = () => {
		return
	}

	const onConnectCall = () => {
		return
	}

	const onCreateConference = () => {
		setModalOpened(true)
	}

	const CurrentConference = (props: {begin: string, end?: string, status: string}) => (
		<div style={{ width: 340, margin: 'auto', alignSelf: 'start' }}>
			<Card shadow='sm' p='lg'>
				<Group position='apart'>
					<Group direction={'column'} spacing={0}>
						<Text size={'sm'}>
							Тема:
						</Text>
						<Text weight={700}>
							Парк на набережной
						</Text>
					</Group>
					{
						props.status === 'current' ?
							<Badge color='green' variant='light'>
								В процессе
							</Badge>
							:
							<Badge color='red' variant='light'>
								Завершено
							</Badge>
					}

				</Group>
				<Group direction={'column'} spacing={0} style={{marginTop: '10px'}}>
					{/*<ThemeIcon variant={'filled'}  color={'gray'}>*/}
					{/*	<Clock size={20}/>*/}
					{/*</ThemeIcon>*/}
					<Text color={'#909296'}>Начало в {props.begin}</Text>
					{
						props.status !== 'current' &&
						<Text color={'#909296'}>Завершено в {props.end}</Text>
					}
				</Group>
				<Spoiler maxHeight={140} showLabel="Подробнее" hideLabel="Свернуть" style={{marginTop: '40px'}}>
					<Text style={{marginBottom: '5px'}}>Участники</Text>
					<Group direction={'column'} spacing={10} style={{width: '100%'}}>
						{
							participants.map((c, index) => (
								<Card key={index} style={{backgroundColor: '#373A40', padding: '10px', width: '100%'}}>
									<Group direction={'row'} spacing={5}>
										<ThemeIcon variant={'outline'} size={'md'} color={'gray'}>
											<MoodSmile size={17}/>
										</ThemeIcon>
										<Text>{ c }</Text>
									</Group>

								</Card>
							))
						}
					</Group>
				</Spoiler>
				<Button fullWidth variant={'outline'} size={'md'} style={{marginTop: '50px'}} onClick={onOpenChat}>
					Открыть чат
				</Button>
				<Button fullWidth size={'md'} style={{marginTop: '10px'}} onClick={onConnectCall}>
					Присоединиться
				</Button>
			</Card>
		</div>
	)

	return<>
		<Modal
			opened={modalOpened}
			onClose={() => setModalOpened(false)}
			title="Новая конференция"
		>

		</Modal>
		<Center>
			<Container style={{marginLeft: '30px', marginRight: '30px', marginBottom: '100px', maxWidth: '1180px'}}>
				<Button size={'lg'} style={{marginTop: '50px'}} onClick={onCreateConference}>
					Создать конференцию
				</Button>
				<Group direction={'column'} style={{marginTop: '50px'}}>
					<Text size={'xl'} color={'#DEE2E6'}>Запланированные конференции</Text>
					<SimpleGrid cols={3}>
						<CurrentConference begin={'08:30'} status={'current'}/>
						<CurrentConference begin={'09:10'} status={'current'}/>
						<CurrentConference begin={'10:00'} status={'current'}/>
					</SimpleGrid>
				</Group>
				<Group direction={'column'} style={{marginTop: '50px'}}>
					<Text size={'xl'} color={'#DEE2E6'}>Прошедшие конференции</Text>
					<SimpleGrid cols={3}>
						<CurrentConference begin={'08:30'} end={'8:40'} status={'finished'}/>
						<CurrentConference begin={'09:10'} end={'10:00'} status={'finished'}/>
						<CurrentConference begin={'10:00'} end={'10:30'} status={'finished'}/>
					</SimpleGrid>
				</Group>
			</Container>
		</Center>
	</>

}

export default Conferences