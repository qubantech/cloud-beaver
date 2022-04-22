import { atom } from 'recoil'


export const UserAuthState = atom<'manager' | 'partner' | 'implementer' | null>({
	key: 'userAuthState',
	default: null,
})
