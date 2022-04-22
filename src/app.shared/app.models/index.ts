type User = {
    id: string,
    sex: 'm' | 'f',
    nickname: string,
    firstname: string,
    lastname: string,
    email: string,
    role: 'manager' | 'partner' | 'implementer',
    projects: string[] | undefined, // projects id's
}

type Project = {
    id: string,
    owner: string, // owners uuid
    controllers: string[] | undefined, // managers uuids
    checkpoints: string[] | undefined, // checkpoint uuids
    organizations: string[] | undefined, // description strings
}

type Checkpoint = {
    id: string,
    controllers: string[] | undefined,
    documents: string[] | undefined,
    report: string,
    infographics: string,
    conferences: string[] | undefined,
    timeDeviation: number,
    costDeviation: number
}

type Conference = () => {
    id: string,
    title: string,
    description: string,
    participants: string[] | undefined,
    begin: number,
    end: number,
    chat: Message[] | undefined
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
    chat: Message[] | undefined,
    status: string
}

type Task = {
    id: string,
    title: string,
    description: string,
    begin: number,
    endPlan: number,
    endFact: number,
    tags: string[] | undefined,
    applications: Application[] | undefined,
    status: string,
    implementers: string[] | undefined,
    controllers: string[] | undefined,
    chat: Message[] | undefined,
    score: number,
    connectedTasks: string[] | undefined
}

type Application = {
    link: string,
    type: string
}

export type { User, Project, Checkpoint, Conference, Message, Task, Document, Application }