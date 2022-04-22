import {Task} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'
import {putObject} from '../../app.configs'
// @ts-ignore
import {v4 as uuid} from 'uuid'

const useTaskById = (id: string) => useWatchedObject<Task>(`/tasks/${id}`)

const useTaskList = () => useWatchedObject<{[key: string]: Task}>('/tasks/')

const addTask = (task: Task) => {
	task.id = uuid()
	return putObject<Task>(`/tasks/${task.id}`, task)
}

export {useTaskById, useTaskList, addTask}