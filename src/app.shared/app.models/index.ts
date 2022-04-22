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
    description: string,
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

type Document = {
    id: string,
    data: never,
    chat: Message[],
    status: string
}

type Task = {
    id: string,
    title: string,
    description: string,
    begin: number,
    endPlan: number,
    endFact: number,
    tags: string[],
    applications: Application[],
    status: string,
    implementers: string[],
    controllers: string[],
    chat: Message[],
    score: number,
    connectedTasks: string[]
}

type Application = {
    link: string,
    type: string
}

export type { User, Project, Checkpoint, Conference, Message, Task, Document, Application }