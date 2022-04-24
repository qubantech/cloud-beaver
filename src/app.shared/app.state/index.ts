import { atom } from 'recoil'
import { User } from '../app.models'


export const UserAuthState = atom<'manager' | 'implementer' | null>({
	key: 'userAuthState',
	default: null,
})

export const UserState = atom<User | null>({
	key: 'userState',
	default: null,
})