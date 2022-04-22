import {Project} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'


const useProjectById = (id: string) => useWatchedObject<Project>(`/projects/${id}`)

const useProjectList = () => useWatchedObject<{[key: string]: Project}>('/projects/')

export {useProjectById, useProjectList}