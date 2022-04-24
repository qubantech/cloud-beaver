import React from 'react'
import {
	Modal,
	Image,
	Text,
	Grid,
	Group,
	createStyles,
	Textarea,
	Button,
	TextInput,
	SimpleGrid,
	Timeline, Card, Paper, Spoiler, Badge, AspectRatio
} from '@mantine/core'
import {GitBranch} from 'tabler-icons-react'

const useStyles = createStyles((theme) => {
	const BREAKPOINT = theme.fn.smallerThan('sm')

	return {
		wrapper: {
			display: 'flex',
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
			borderRadius: theme.radius.lg,
			padding: 4,
			border: `1px solid ${
				theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
			}`,

			[BREAKPOINT]: {
				flexDirection: 'column',
			},
		},

		form: {
			boxSizing: 'border-box',
			flex: 1,
			padding: theme.spacing.xl,
			paddingLeft: theme.spacing.xl * 2,
			borderLeft: 0,

			[BREAKPOINT]: {
				padding: theme.spacing.md,
				paddingLeft: theme.spacing.md,
			},
		},

		fields: {
			marginTop: -25,
		},

		fieldInput: {
			flex: 1,

			'& + &': {
				marginLeft: theme.spacing.md,

				[BREAKPOINT]: {
					marginLeft: 0,
					marginTop: theme.spacing.md,
				},
			},
		},

		fieldsGroup: {
			display: 'flex',

			[BREAKPOINT]: {
				flexDirection: 'column',
			},
		},

		title: {
			marginBottom: theme.spacing.xl,
			fontFamily: `Greycliff CF, ${theme.fontFamily}`,

			[BREAKPOINT]: {
				marginBottom: theme.spacing.xl,
			},
		},

		control: {
			[BREAKPOINT]: {
				flex: 1,
			},
		},
	}
})

const СheckCard = ({
				  title,
				  date,
				  status,
				  onClick = () => {return}
			  }: {
	title: string,
	date?: string,
	status: 'completed' | 'late' | 'cancelled' | 'current' | 'planned'
	onClick?: () => void
}) => {

	const statusColor =
		status == 'completed' ? 'green' :
			status == 'late' ? 'red' :
				status == 'cancelled' ? 'red' :
					status == 'current' ? 'yellow' :
						status == 'planned' ? 'violet' : ''

	const dateTitle =
		status == 'completed' ? `Завершено ${date}` :
			status == 'late' ? 'Задерживается' :
				status == 'cancelled' ? 'Отменено' :
					status == 'current' ? `В работе с ${date}` :
						status == 'planned' ? `Запланировано на ${date}` : ''


	return <Paper p={'xs'} style={{ cursor: 'pointer' }}>
		<SimpleGrid cols={1}>
			<Text color="dimmed" size="sm" mb={0} style={{ color: '#bbbbbb' }}>
				{title}
			</Text>
			<Group position={'apart'}>
				<Badge color={statusColor}>
					<Text size="xs" mt={4}>
						{dateTitle}
					</Text>
				</Badge>
			</Group>
		</SimpleGrid>
	</Paper>
}

const Aboutmodal = (props:{isOpen:boolean, setOpen: (b:boolean) => void, title:string, imageurl:string, description:string}) => {
	const { classes } = useStyles()
	return(
		<Modal
			opened={props.isOpen}
			onClose={() => props.setOpen(false)}
			size={'66%'}
			title={props.title}
		>
			<Image height={200} src={props.imageurl}/>
			<Grid>
				<Grid.Col span={6}>
					<Text size="lg" weight={700} pt={25} className={classes.title}>
						План работы
					</Text>
					<Timeline pt={1} active={1} bulletSize={24} lineWidth={2}>
						<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка 1">
							<СheckCard date={'10.02.2022'}
								  title={'Создание системы администрирования городского парковочного пространства'}
								  status={'completed'}
							/>
						</Timeline.Item>
						<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка 2">
							<СheckCard date={'22.03.2022'}
								  title={'Интеллектуальное управление городским общественным транспортом'}
								  status={'completed'}
							/>
						</Timeline.Item>
						<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка 3">
							<СheckCard date={'2022'}
								  title={'Создание безопасных и комфортных мест ожидания общественного транспорта'}
								  status={'planned'}
							/>
						</Timeline.Item>
						<Timeline.Item bullet={<GitBranch size={12}/>} title="Контрольная точка 4">
							<СheckCard date={'2022'}
								  title={'Создание системы мониторинга состояния дорожного полотна'}
								  status={'planned'}
							/>
						</Timeline.Item>
					</Timeline>
				</Grid.Col>
				<Grid.Col span={6}>
					<form className={classes.form} onSubmit={(event) => event.preventDefault()}>
						<Text size="lg" weight={700} className={classes.title}>
							Описание
						</Text>
						<Text>
							{props.description}
						</Text>
						<Text pt={25} pb={25} size="lg" weight={700} className={classes.title}>
							Оставить предложение и узнать подробнее
						</Text>
						<div className={classes.fields}>
							<SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
								<TextInput label="Ваше имя" placeholder="Ваше имя" />
								<TextInput label="Ваша почта" placeholder="hello@mantine.dev" required />
							</SimpleGrid>
							<Textarea
								mt="md"
								label="Сообщение"
								placeholder="Напишите дополнительную информацию"
								minRows={3}
							/>
							<Group position="right" mt="md">
								<Button type="submit" className={classes.control}>
									Отправить
								</Button>
							</Group>
						</div>
					</form>
				</Grid.Col>
			</Grid>
		</Modal>
	)
}
export default Aboutmodal