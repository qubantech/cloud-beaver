import { HeroTitle } from './layouts/hero-title.layout'
import React, {useState} from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { Button, Container, createStyles, Grid, Paper, Title, Text } from '@mantine/core'
import { ContactForm } from './components/contact-form.component'
import { PreviewCard } from './components/project-preview-card/preview-card.component'
import Aboutmodal from './aboutmodal'
import { useRecoilValue } from 'recoil'
import { UserAuthState } from '../../app.shared/app.state'


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

	maintitle: {
		fontFamily: `${theme.fontFamily}`,
		fontWeight: 600,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: 24,
		marginTop: theme.spacing.xs,
	},

	title: {
		fontFamily: `${theme.fontFamily}`,
		fontWeight: 700,
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

	const auth = useRecoilValue(UserAuthState)

	const { classes } = useStyles()
	const [isOpen, setOpen] = useState<boolean>(false)
	const [img, setImg] = useState<string>('')
	const [desc, setDesc] = useState<string>('')
	const [title, setTitle] = useState<string>('')

	return <>
		{
			!auth && <HeroTitle/>
		}
		<Aboutmodal isOpen={isOpen} setOpen={setOpen} title={title} imageurl={img} description={desc}/>
		<Container>
			<Title className={classes.maintitle} order={4} pb={40} pt={80}>
				Система открыта к предложениям информационных партнеров
			</Title>
			<Grid>
				<Grid.Col onClick={() => {
					setImg('https://sredatomsk.ru/wp-content/uploads/2020/05/umnyj-transport.jpg')
					setDesc('Развитие общественного городского транспорта - одна из самых важных наших задач и мы были бы рады найти партнера, который поможет автоматизировать часть процессов.\n\nНа данный момент сделано многое и необходимо хардверное решение для информационной системы на остановке: расписание маршрутов, пробки, туристический гид.')
					setOpen(true)
					setTitle('Умный городской транспорт')
				}} span={6}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 70%), url(https://sredatomsk.ru/wp-content/uploads/2020/05/umnyj-transport.jpg)' }}
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
				}} span={3}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 70%), url(https://avatars.mds.yandex.net/get-zen_doc/1872259/pub_5fa3a066feef0b1a81cae560_5fa3a63a5dc59845ddd87443/scale_1200)' }}
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
					setImg('https://avatars.mds.yandex.net/i?id=3a77dd8021d097c3eaf295ef040ef95c-5876532-images-thumbs&n=13&exp=1')
					setDesc('Образование - самая важная вещь, от которой зависит наше будущее. У нас уже запущен процесс цифровизации, но необходимы дополнительные инструменты в некоторых задачах.')
					setOpen(true)
					setTitle('Культура')
				}} span={3}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 70%), url(https://avatars.mds.yandex.net/i?id=3a77dd8021d097c3eaf295ef040ef95c-5876532-images-thumbs&n=13&exp=1)' }}
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
				<Grid.Col onClick={() => {
					setImg('https://www.orangepix.it/repo/copertine_blog/anteprime/Trend-Visual-2018_acb34ae1c2_128.jpg')
					setDesc('Образование - самая важная вещь, от которой зависит наше будущее. У нас уже запущен процесс цифровизации, но необходимы дополнительные инструменты в некоторых задачах.')
					setOpen(true)
				}} span={3}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 70%), url(https://www.orangepix.it/repo/copertine_blog/anteprime/Trend-Visual-2018_acb34ae1c2_128.jpg)' }}
						className={classes.card}
					>
						<div>
							<Text
								className={classes.category} size='xs'>
								Информирование туристов
							</Text>
							<Title order={3} className={classes.title}>
								Туризм и сервис
							</Title>
						</div>
						<Button variant="white" color="dark">
							Оставить предложение
						</Button>
					</Paper>
				</Grid.Col>
				<Grid.Col onClick={() => {
					setImg('https://artwuz.ru/wp-content/uploads/2020/06/obespechenie-ekologicheskoj-bezopasnosti.jpg')
					setDesc('Образование - самая важная вещь, от которой зависит наше будущее. У нас уже запущен процесс цифровизации, но необходимы дополнительные инструменты в некоторых задачах.')
					setOpen(true)
				}} span={3}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 70%), url(https://artwuz.ru/wp-content/uploads/2020/06/obespechenie-ekologicheskoj-bezopasnosti.jpg)' }}
						className={classes.card}
					>
						<div>
							<Text
								className={classes.category} size='xs'>
								Управление отходами
							</Text>
							<Title order={3} className={classes.title}>
								Интеллектуальные системы общественной и экологической безопасности
							</Title>
						</div>
						<Button variant="white" color="dark">
							Оставить предложение
						</Button>
					</Paper>
				</Grid.Col>
				<Grid.Col onClick={() => {
					setImg('https://ysia.ru/wp-content/uploads/2019/06/img_3068.jpg')
					setDesc('Образование - самая важная вещь, от которой зависит наше будущее. У нас уже запущен процесс цифровизации, но необходимы дополнительные инструменты в некоторых задачах.')
					setOpen(true)
				}} span={3}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 70%), url(https://ysia.ru/wp-content/uploads/2019/06/img_3068.jpg)' }}
						className={classes.card}
					>
						<div>
							<Text
								className={classes.category} size='xs'>
								Создание мультиплатформенного приложения
							</Text>
							<Title order={3} className={classes.title}>
								Городское управление
							</Title>
						</div>
						<Button variant="white" color="dark">
							Оставить предложение
						</Button>
					</Paper>
				</Grid.Col>
				<Grid.Col onClick={() => {
					setImg('https://spbit.ru/files/iotzkh2_1543220596.jpg')
					setDesc('Образование - самая важная вещь, от которой зависит наше будущее. У нас уже запущен процесс цифровизации, но необходимы дополнительные инструменты в некоторых задачах.')
					setOpen(true)
				}} span={3}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 70%), url(https://spbit.ru/files/iotzkh2_1543220596.jpg)' }}
						className={classes.card}
					>
						<div>
							<Text
								className={classes.category} size='xs'>
								Планирование и статистика
							</Text>
							<Title order={3} className={classes.title}>
								Умное ЖКХ
							</Title>
						</div>
						<Button variant="white" color="dark">
							Оставить предложение
						</Button>
					</Paper>
				</Grid.Col>
				<Grid.Col onClick={() => {
					setImg('https://phonoteka.org/uploads/posts/2021-06/1622790180_30-phonoteka_org-p-vsemirnaya-set-art-krasivo-31.jpg')
					setDesc('Образование - самая важная вещь, от которой зависит наше будущее. У нас уже запущен процесс цифровизации, но необходимы дополнительные инструменты в некоторых задачах.')
					setOpen(true)
				}} span={3} pb={100}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 70%), url(https://phonoteka.org/uploads/posts/2021-06/1622790180_30-phonoteka_org-p-vsemirnaya-set-art-krasivo-31.jpg)' }}
						className={classes.card}
					>
						<div>
							<Text
								className={classes.category} size='xs'>
								Расширенный доступ к ШПД
							</Text>
							<Title order={3} className={classes.title}>
								Развитие сетей связи
							</Title>
						</div>
						<Button variant="white" color="dark">
							Оставить предложение
						</Button>
					</Paper>
				</Grid.Col>
				<Grid.Col onClick={() => {
					setImg('https://i.pinimg.com/736x/e6/5d/02/e65d0254eb912376abf8f30604eb6574.jpg')
					setDesc('Образование - самая важная вещь, от которой зависит наше будущее. У нас уже запущен процесс цифровизации, но необходимы дополнительные инструменты в некоторых задачах.')
					setOpen(true)
				}} span={3} pb={100}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						sx={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, 0) 50%), url(https://i.pinimg.com/736x/e6/5d/02/e65d0254eb912376abf8f30604eb6574.jpg)' }}
						className={classes.card}
					>
						<div>
							<Text
								className={classes.category} size='xs'>
								Энергоэффективное освещение
							</Text>
							<Title order={3} className={classes.title}>
								Инновации в городской среде
							</Title>
						</div>
						<Button variant="white" color="dark">
							Оставить предложение
						</Button>
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
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