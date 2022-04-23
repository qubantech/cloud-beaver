import {Conference, Project} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'
import {putObject} from '../../app.configs'
// @ts-ignore
import {v4 as uuid} from 'uuid'

const useProjectById = (id: string) => useWatchedObject<Project>(`/projects/${id}`)

const useProjectList = () => useWatchedObject<{[key: string]: Project}>('/projects/')

const addProject = (project: Project) => {
	project.id = uuid()
	return putObject<Project>(`/projects/${project.id}`, project)
}

export {useProjectById, useProjectList, addProject}