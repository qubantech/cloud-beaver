import {User} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'


const useUserById = (id: string) => useWatchedObject<User>(`/users/${id}`)

const useUserList = () => useWatchedObject<{[key: string]: User}>('/users/')

export {useUserById, useUserList}