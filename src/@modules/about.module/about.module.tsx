import { HeroTitle } from './layouts/hero-title.layout'
import { SubGrid } from './layouts/sub-grid.layout'
import React, {useState} from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import {Button, Container, createStyles, Grid, Paper, Title, Text, useMantineTheme} from '@mantine/core'
import { ContactForm } from './components/contact-form.component'
import { PreviewCard } from './components/project-preview-card/preview-card.component'
import Aboutmodal from './aboutmodal'

const useStyles = createStyles((theme) => ({
	card: {
		height: 440,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	title: {
		fontFamily: `${theme.fontFamily}`,
		fontWeight: 900,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: 30,
		marginTop: theme.spacing.xs,
	},

	category: {
		color: theme.white,
		opacity: 0.7,
		fontWeight: 700,
		textTransform: 'uppercase',
	},
}))


const Welcome = () => {
	const { classes } = useStyles()
	const [isOpen, setOpen] = useState<boolean>(false)
	const [img, setImg] = useState<string>('')
	const [desc, setDesc] = useState<string>('')
	const [title, setTitle] = useState<string>('')
	return <>
		<HeroTitle/>
		<Aboutmodal isOpen={isOpen} setOpen={setOpen} title={title} imageurl={img} description={desc}/>
		<Container>
			<Title className={classes.title} order={4} align={'center'} pb={40}>
				Система открыта к предложениям информационных партнеров в следующих сферах
			</Title>
			<Grid>
				<Grid.Col onClick={() => {
					setImg('https://sredatomsk.ru/wp-content/uploads/2020/05/umnyj-transport.jpg')
					setDesc('Развитие общественного городского транспорта - одна из самых важных наших задач и мы были бы рады найти партнера, который поможет автоматизировать часть процессов.')
					setOpen(true)
					setTitle('Умный городской транспорт')
				}} span={6} pb={100}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'url(https://sredatomsk.ru/wp-content/uploads/2020/05/umnyj-transport.jpg)' }}
						className={classes.card}
					>
						<div>
							<Text
								className={classes.category} size='xs'>
								Автоматизация остановок
							</Text>
							<Title order={3} className={classes.title}>
								Умный городской транспорт
							</Title>
						</div>
						<Button variant="white" color="dark">
							Оставить предложение
						</Button>
					</Paper>
				</Grid.Col>
				<Grid.Col onClick={() => {
					setImg('https://avatars.mds.yandex.net/get-zen_doc/1872259/pub_5fa3a066feef0b1a81cae560_5fa3a63a5dc59845ddd87443/scale_1200')
					setDesc('Образование - самая важная вещь, от которой зависит наше будущее. У нас уже запущен процесс цифровизации, но необходимы дополнительные инструменты в некоторых задачах.')
					setOpen(true)
					setTitle('Образование')
				}} span={3} pb={100}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'url(https://avatars.mds.yandex.net/get-zen_doc/1872259/pub_5fa3a066feef0b1a81cae560_5fa3a63a5dc59845ddd87443/scale_1200)' }}
						className={classes.card}
					>
						<div>
							<Text
								className={classes.category} size='xs'>
								Цифровизация журналов успеваемости
							</Text>
							<Title order={3} className={classes.title}>
								Образование
							</Title>
						</div>
						<Button variant="white" color="dark">
							Оставить предложение
						</Button>
					</Paper>
				</Grid.Col>
				<Grid.Col onClick={() => {
					setImg('https://avatars.mds.yandex.net/get-zen_doc/1872259/pub_5fa3a066feef0b1a81cae560_5fa3a63a5dc59845ddd87443/scale_1200')
					setDesc('Образование - самая важная вещь, от которой зависит наше будущее. У нас уже запущен процесс цифровизации, но необходимы дополнительные инструменты в некоторых задачах.')
					setOpen(true)
					setTitle('Образование')
				}} span={3} pb={100}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'url(https://avatars.mds.yandex.net/i?id=3a77dd8021d097c3eaf295ef040ef95c-5876532-images-thumbs&n=13&exp=1)' }}
						className={classes.card}
					>
						<div>
							<Text
								className={classes.category} size='xs'>
								Дистанционная продажа билетов
							</Text>
							<Title order={3} className={classes.title}>
								Культура
							</Title>
						</div>
						<Button variant="white" color="dark">
							Оставить предложение
						</Button>
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
		{/*<SubGrid/>*/}
	</>
}

const ProjectOverview = () => {

	const {id} = useParams()

	return <Container>
		<Grid columns={12}>
			<Grid.Col span={8}>
				<ContactForm/>
			</Grid.Col>
			<Grid.Col span={4}>
				<PreviewCard {...{
					'image': 'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
					'title': 'Running challenge',
					'description': '56 km this month • 17% improvement compared to last month • 443 place in global scoreboard',
					'stats': [
						{
							'title': 'Distance',
							'value': '27.4 km'
						},
						{
							'title': 'Avg. speed',
							'value': '9.6 km/h'
						},
						{
							'title': 'Score',
							'value': '88/100'
						}
					]
				}}/>
			</Grid.Col>
		</Grid>
	</Container>
}

export const About = () => {
	return <>
		<Routes>
			<Route index element={<Welcome/>}/>
			<Route path={':id'} element={<ProjectOverview/>}/>
		</Routes>
	</>
}