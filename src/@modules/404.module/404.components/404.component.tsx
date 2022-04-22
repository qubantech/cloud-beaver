import React from 'react'
import { createStyles, Container, Title, Text, Button, Group } from '@mantine/core'
import { ReactComponent as Illustration } from '../../../app.shared/app.assets/images/404.svg'
import { useStyles } from './404.style'


export const NothingFound = () => {
	const { classes } = useStyles()

	return (
		<Container className={ classes.root }>
			<div className={ classes.inner }>
				<Illustration className={ classes.image }/>
				<div className={ classes.content }>
					<Title className={ classes.title } color="dimmed">Ура, здесь ничего нет!</Title>
					<Text color="dimmed" size="lg" align="center" className={ classes.description }>
                        Страница не существует, но круто, что вы нашли это место.
						Может быть, вы сможете найти что-то ещё интересное.
					</Text>
					<Group position="center">
						<Button size="md">Хочу обратно</Button>
					</Group>
				</div>
			</div>
		</Container>
	)
}