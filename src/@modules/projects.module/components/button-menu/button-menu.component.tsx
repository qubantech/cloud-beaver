import React from 'react'
import { Button, Menu, Text, useMantineTheme } from '@mantine/core'
import { SquareCheck, Package, Users, Calendar, ChevronDown } from 'tabler-icons-react'


export function ButtonMenu() {
	const theme = useMantineTheme()
	return (
		<Menu
			control={
				<Button rightIcon={<ChevronDown size={18} />} sx={{ paddingRight: 12 }}>
					Создать
				</Button>
			}
			transition="pop-top-right"
			placement="end"
			size="lg"
		>
			<Menu.Item
				icon={<Package size={16} color={theme.colors.blue[6]} />}
				rightSection={
					<Text size="xs" transform="uppercase" weight={700} color="dimmed">
						Ctrl + P
					</Text>
				}
			>
				Проект
			</Menu.Item>
			<Menu.Item
				icon={<SquareCheck size={16} color={theme.colors.pink[6]} />}
				rightSection={
					<Text size="xs" transform="uppercase" weight={700} color="dimmed">
						Ctrl + T
					</Text>
				}
			>
				Задачу
			</Menu.Item>
		</Menu>
	)
}