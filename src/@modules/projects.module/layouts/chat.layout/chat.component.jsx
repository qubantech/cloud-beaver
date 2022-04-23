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
	
	return <MainContainer>
		<ChatContainer>
			<MessageList>
				{
					messages.map((m, i) =>
						<Message key={i} model={m} >
							<Avatar src={ 'https://avatars.githubusercontent.com/u/57266314?v=4' } name={ m.sender } />
							<Message.Header sender={m.sender} sentTime={m.sentTime}/>
						</Message>
					)
				}
			</MessageList>
			<MessageInput placeholder="Сообщение" />
			<MessageInput placeholder="Сообщение"
						  onSend={handleSend}
						  onChange={setMsgInputValue}
						  value={msgInputValue}
						  ref={inputRef}
			/>
		</ChatContainer>
	</MainContainer>
}