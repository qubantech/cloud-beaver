import React, {useState} from 'react'
import {Button, Paper, Text, Group, CloseButton} from '@mantine/core'

export function Recommendation() {
	const [recStart, setRecStart] = useState(false)
	const [isOpened, setIsOpened] = useState(true)

	return (
		<>
			{
				isOpened &&
				<Paper withBorder p="lg" radius="md" shadow="md" style={{minWidth: '300px'}}>
					<Group position="apart" mb="xs">
						<Text size="md" weight={500}>
							Рекомендации
						</Text>
						<CloseButton mr={-9} mt={-9} onClick={() => setIsOpened(false)}/>
					</Group>
					{
						!recStart &&
						<Group position="left" mt="xs">
							<Button variant="default" size="xs">
								Отказаться
							</Button>
							<Button variant="outline" size="xs" onClick={() => setRecStart(true)}>
								Запустить
							</Button>
						</Group>
						||
						<Group>
							<Text>
								Рекомендуется перераспределить ресурсы с проектов <b>Туризм и сервис</b> и <b>Инновации для городской среды</b> на проекты <b>Умное ЖКХ</b> и <b>Городское управление</b>
							</Text>
						</Group>
					}
				</Paper>
			}
		</>

	)
}