import {Document} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'


const useDocumentById = (id: string) => useWatchedObject<Document>(`/documents/${id}`)

const useDocumentList = () => useWatchedObject<{[key: string]: Document}>('/documents/')

export {useDocumentById, useDocumentList}