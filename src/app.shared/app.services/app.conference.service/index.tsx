import {Conference} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'


const useConferenceById = (id: string) => useWatchedObject<Conference>(`/conferences/${id}`)

const useConferenceList = () => useWatchedObject<{[key: string]: Conference}>('/conferences/')

export {useConferenceById, useConferenceList}