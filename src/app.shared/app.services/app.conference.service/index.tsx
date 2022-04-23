import {Conference} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'
import {putObject} from '../../app.configs'
// @ts-ignore
import {v4 as uuid} from 'uuid'
import {startMeeting} from '../app.zoom.service'

const useConferenceById = (id: string) => useWatchedObject<Conference>(`/conferences/${id}`)

const useConferenceList = () => useWatchedObject<{[key: string]: Conference}>('/conferences/')

const addConference = (conference: Conference) => {
	conference.id = uuid()
	return startMeeting()
		.then(lnk => {
			conference.link = lnk
			return conference
		})
		.then(conf => putObject<Conference>(`/conferences/${conf.id}`, conf))
}

export {useConferenceById, useConferenceList, addConference}