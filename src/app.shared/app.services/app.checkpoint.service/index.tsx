import {Checkpoint} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'
// @ts-ignore
import {v4 as uuid} from 'uuid'
import {putObject} from '../../app.configs'

const useCheckpointById = (id: string) => useWatchedObject<Checkpoint>(`/checkpoints/${id}`)

const useCheckpointList = () => useWatchedObject<{[key: string]: Checkpoint}>('/checkpoints/')

const addCheckpoint = (checkpoint: Checkpoint) => {
	checkpoint.id = uuid()
	return putObject<Checkpoint>(`/checkpoints/${checkpoint.id}`, checkpoint)
}

export {useCheckpointById, useCheckpointList, addCheckpoint}