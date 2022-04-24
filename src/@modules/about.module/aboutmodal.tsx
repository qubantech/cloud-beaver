import React from 'react'
import {Modal, Image, Text, Grid, Group, createStyles, Textarea, Button, TextInput, SimpleGrid} from '@mantine/core'

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
			marginBottom: theme.spacing.xl * 1.5,
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

const Aboutmodal = (props:{isOpen:boolean, setOpen: (b:boolean) => void, title:string, imageurl:string, description:string}) => {
	const { classes } = useStyles()
	return(
		<Modal
			opened={props.isOpen}
			onClose={() => props.setOpen(false)}
			size={'xl'}
			title={props.title}
		>
			<Image height={400} src={props.imageurl}/>
			<Grid>
				<Grid.Col span={6}>
					<Text pt={25}>
						{props.description}
					</Text>
				</Grid.Col>
				<Grid.Col span={6}>
					<form className={classes.form} onSubmit={(event) => event.preventDefault()}>
						<Text size="lg" weight={700} className={classes.title}>
							Оставить предложение
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