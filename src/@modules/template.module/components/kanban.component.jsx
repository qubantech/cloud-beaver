import React, { useEffect, useState } from 'react'
import Board, { addColumn } from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'


const initialBoard = {
	columns: [
		{
			id: 1,
			title: 'Backlog',
			cards: [
				{
					id: 1,
					title: 'Card title 1',
					description: 'Card content'
				},
				{
					id: 2,
					title: 'Card title 2',
					description: 'Card content'
				},
				{
					id: 3,
					title: 'Card title 3',
					description: 'Card content'
				}
			]
		},
		{
			id: 2,
			title: 'Doing',
			cards: [
				{
					id: 9,
					title: 'Card title 9',
					description: 'Card content'
				}
			]
		},
		{
			id: 3,
			title: 'Q&A',
			cards: [
				{
					id: 10,
					title: 'Card title 10',
					description: 'Card content'
				},
				{
					id: 11,
					title: 'Card title 11',
					description: 'Card content'
				}
			]
		},
	]
}

export const KanbanBoard = () => {

	const [board, setBoard] = useState(initialBoard)

	const newBoard = addColumn(board, {
		id: 4,
		title: 'Production',
		cards: [
			{
				id: 12,
				title: 'Card title 12',
				description: 'Card content'
			},
			{
				id: 13,
				title: 'Card title 13',
				description: 'Card content'
			}
		]
	})

	useEffect(() => {
		setBoard(newBoard)
	}, [])

	return (
		<Board>
			{board}
		</Board>
	)
}