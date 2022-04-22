import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

const app = initializeApp({

})

export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const db = getDatabase(app)