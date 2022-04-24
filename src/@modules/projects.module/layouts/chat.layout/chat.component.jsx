import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
	MainContainer,
	ChatContainer,
	MessageList,
	Message,
	MessageInput,
	Avatar
} from '@chatscope/chat-ui-kit-react'
import React, { useRef } from 'react'

import './chat.style.css'

export const Chat = () => {
	
	const inputRef = useRef()
	const [msgInputValue, setMsgInputValue] = React.useState('')
	const [messages, setMessages] = React.useState([
		{
			message: 'Никит, нужно будет к отчёту ещё раз съездить на объект, там сообщили, что есть изменения',
			sentTime: '17 минут назад',
			sender: 'Лихогуб Олег',
			direction: 'outgoing',
			avatar: 'https://avatars.githubusercontent.com/u/57266314?v=4'
		},
		{
			message: 'Хорошо, когда необходимо выехать на объект?',
			sentTime: '17 минут назад',
			sender: 'Ванюченко Никита',
			avatar: 'https://memepedia.ru/wp-content/uploads/2019/01/hamster-768x432.jpg'
		},
		{
			message: 'И есть ли ещё указания?',
			sentTime: '12 минут назад',
			sender: 'Ванюченко Никита',
			avatar: 'https://memepedia.ru/wp-content/uploads/2019/01/hamster-768x432.jpg'
		},
		{
			message: 'Будем уточнять ещё',
			sentTime: '7 минут назад',
			sender: 'Лихогуб Олег',
			direction: 'outgoing',
			avatar: 'https://avatars.githubusercontent.com/u/57266314?v=4'
		},
		{
			message: 'Хорошо',
			sentTime: '7 минут назад',
			sender: 'Ванюченко Никита',
			avatar: 'https://memepedia.ru/wp-content/uploads/2019/01/hamster-768x432.jpg'
		},
		{
			message: 'Сложно замокать диалог',
			sentTime: 'только что',
			sender: 'Лихогуб Олег',
			direction: 'outgoing',
			avatar: 'https://avatars.githubusercontent.com/u/57266314?v=4'
		},
		{
			message: 'Да, приходится придумывать осмысленный текст',
			sentTime: 'только что',
			sender: 'Ванюченко Никита',
			avatar: 'https://memepedia.ru/wp-content/uploads/2019/01/hamster-768x432.jpg'
		},
	])

	const handleSend = message => {
		setMessages([...messages,
			{
				message: message,
				sentTime: 'только что',
				sender: 'Лихогуб Олег',
				direction: 'outgoing',
				avatar: 'https://avatars.githubusercontent.com/u/57266314?v=4'
			}
		])
		setMsgInputValue('')
		inputRef.current.focus()
	}
	
	return <MainContainer style={{borderColor: '#5C5F66', borderRadius: '9px' }}>
		<ChatContainer>
			<MessageList  style={{backgroundColor: '#373A40', borderColor: '#5C5F66', borderRadius: '5px 5px 0 0', color: '#CED4DA'}}>
				{
					messages.map((m, i) =>
						<Message style={{fontFamily: 'Greycliff CF'}} key={i} model={m} >
							<Avatar src={ m.avatar } name={ m.sender } />
							<Message.Header sender={m.sender} sentTime={m.sentTime} style={{
								fontFamily: 'Greycliff CF',
								color: '#CED4DA',
							}}/>
						</Message>
					)
				}
			</MessageList>
			<MessageInput placeholder="Сообщение"
						  style={{
							  backgroundColor: '#373A40',
							  borderColor: '#5C5F66',
							  borderRadius: '5px'
						  }}
			/>
			<MessageInput placeholder="Сообщение"
						  onSend={handleSend}
						  onChange={setMsgInputValue}
						  value={msgInputValue}
						  ref={inputRef}
						  style={{
							  backgroundColor: '#373A40',
							  borderColor: '#5C5F66',
							  borderRadius: '0 0 5px 5px'
						  }}
			/>
		</ChatContainer>
	</MainContainer>
}