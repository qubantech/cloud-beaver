import {Document} from '../../app.models'
import {useWatchedObject} from '../../app.configs/hooks'
// @ts-ignore
import {v4 as uuid} from 'uuid'
import {putObject} from '../../app.configs';

const useDocumentById = (id: string) => useWatchedObject<Document>(`/documents/${id}`)

const useDocumentList = () => useWatchedObject<{[key: string]: Document}>('/documents/')

const addDocument = (document: Document) => {
	document.id = uuid()
	return putObject<Document>(`/documents/${document.id}`, document)
}

export {useDocumentById, useDocumentList, addDocument}