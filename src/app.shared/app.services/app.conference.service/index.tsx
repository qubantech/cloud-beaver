import {Conference} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'
import {putObject} from '../../app.configs'
// @ts-ignore
import {v4 as uuid} from 'uuid'

const useConferenceById = (id: string) => useWatchedObject<Conference>(`/conferences/${id}`)

const useConferenceList = () => useWatchedObject<{[key: string]: Conference}>('/conferences/')

const addConference = (conference: Conference) => {
	conference.id = uuid()
	return putObject<Conference>(`/conferences/${conference.id}`, conference)
}

export {useConferenceById, useConferenceList, addConference}