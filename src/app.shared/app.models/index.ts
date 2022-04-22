type User = {
    id: string,
    sex: 'm' | 'f',
    nickname: string,
    firstname: string,
    lastname: string,
    email: string,
    role: 'manager' | 'partner' | 'implementer',
    projects: string[], // projects id's
}

export type { User }