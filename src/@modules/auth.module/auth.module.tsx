import React, { useEffect } from 'react'
import { useForm, useToggle, upperFirst } from '@mantine/hooks'
import {
	TextInput,
	PasswordInput,
	Text,
	Paper,
	Group,
	PaperProps,
	Button,
	Divider,
	Checkbox,
	Anchor,
	Container,
} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { UserAuthState } from '../../app.shared/app.state'
import { Man, Pacman, Robot } from 'tabler-icons-react'


export const AuthForm = (props: PaperProps<'div'>) => {

	const [user, setUser] = useRecoilState(UserAuthState)

	const navigate = useNavigate()
	const [type, toggle] = useToggle('войти', ['войти', 'зарегистрироваться'])

	const form = useForm({
		initialValues: {
			email: '',
			name: '',
			password: '',
			terms: true,
		},

		validationRules: {
			email: (val) => /^\S+@\S+$/.test(val),
			password: (val) => val.length >= 6,
		},
	})

	useEffect(() => {
		if (user) navigate('/')
	}, [])

	const onManagerAuth = () => {
		console.log('manager')
		navigate('/projects')
		setUser('manager')
	}

	const onPartnerAuth = () => {
		console.log('partner')
		navigate('/')
		setUser('partner')
	}

	const onImplementerAuth = () => {
		console.log('implementer')
		navigate('/projects')
		setUser('implementer')
	}

	return (
		<Container mt={'lg'} style={{maxWidth: '480px'}}>
			<Paper radius="md" p="xl" withBorder {...props}>
				<Text size="lg" weight={500}>
					Добро пожаловать! Войти как
				</Text>

				<Group grow mb="md" mt="md" direction={'column'}>
					<Button radius="xl" size='md' onClick={onManagerAuth} color={'gray'} leftIcon={<Man/>}>Менеджер</Button>
					{/*<Button radius="xl" size='md' onClick={onPartnerAuth} color={'gray'} leftIcon={<Pacman/>}>Партнёр</Button>*/}
					<Button radius="xl" size='md' onClick={onImplementerAuth} color={'gray'} leftIcon={<Robot/>}>Исполнитель</Button>
				</Group>

				<Divider label="Или войти по email" labelPosition="center" my="lg" />

				<form onSubmit={form.onSubmit(() => {return})}>
					<Group direction="column" grow>
						{type === 'зарегистрироваться' && (
							<TextInput
								label="Имя"
								placeholder="Ваше имя"
								value={form.values.name}
								onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
							/>
						)}

						<TextInput
							required
							label="Email"
							placeholder="hello@example.email"
							value={form.values.email}
							onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
							error={form.errors.email && 'Invalid email'}
						/>

						<PasswordInput
							required
							label="Пароль"
							placeholder="Ваш пароль"
							value={form.values.password}
							onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
							error={form.errors.password && 'Пароль должен быть как минимум из 6 символов'}
						/>

						{type === 'зарегистрироваться' && (
							<Checkbox
								label="Я принимаю соглашения"
								checked={form.values.terms}
								onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
							/>
						)}
					</Group>

					<Group position="apart" mt="xl">
						<Anchor component="button" type="button" color="gray" onClick={() => toggle()} size="xs">
							{type === 'зарегистрироваться'
								? 'Уже есть аккаунт? Войти'
								: 'Ещё нет аккаунта? Зарегистрироваться'}
						</Anchor>
						<Button type="submit">{upperFirst(type)}</Button>
					</Group>
				</form>
			</Paper>
		</Container>
	)
}