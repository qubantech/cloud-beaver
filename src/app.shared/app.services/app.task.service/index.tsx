import {Task} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'


const useTaskById = (id: string) => useWatchedObject<Task>(`/tasks/${id}`)

const useTaskList = () => useWatchedObject<{[key: string]: Task}>('/tasks/')

export {useTaskById, useTaskList}