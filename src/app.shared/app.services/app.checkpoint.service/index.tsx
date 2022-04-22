import {Checkpoint} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'


const useCheckpointById = (id: string) => useWatchedObject<Checkpoint>(`/checkpoints/${id}`)

const useCheckpointList = () => useWatchedObject<{[key: string]: Checkpoint}>('/checkpoints/')

export {useCheckpointById, useCheckpointList}