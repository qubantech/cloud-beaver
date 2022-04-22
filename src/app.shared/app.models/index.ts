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

type Project = {
    id: string,
    owner: string, // owners uuid
    controllers: string[], // managers uuids
    checkpoints: string[], // checkpoint uuids
    organizations: string[], // description strings
}

type Checkpoint = {
    id: string,
    controllers: string[],
    documents: string[],
    report: string,
    infographics: string,
    conferences: string[]
}

type Conference = () => {
    id: string,
    title: string,
    participants: string[],
    begin: number,
    end: number,
    chat: Message[]
}

type Message = () => {
    id: string,
    sender: string,
    sentAt: number,
    text: string
}

export type { User, Project, Checkpoint, Conference, Message}