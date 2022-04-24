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
	const [messages, setMessages] = React.useState([])

	const handleSend = message => {
		setMessages([...messages,
			{
				message: message,
				sentTime: 'только что',
				sender: 'Лихогуб Олег',
				// direction: 'outgoing',
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
						<Message key={i} model={m} >
							<Avatar src={ 'https://avatars.githubusercontent.com/u/57266314?v=4' } name={ m.sender } />
							<Message.Header sender={m.sender} sentTime={m.sentTime} style={{color: '#CED4DA'}}/>
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