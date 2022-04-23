import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

const app = initializeApp({
	apiKey: 'AIzaSyCGPukj4xCX18fUX91j4r-ximiiSgMdhGw',
	authDomain: 'runtime-squirrel.firebaseapp.com',
	databaseURL: 'https://runtime-squirrel-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'runtime-squirrel',
	storageBucket: 'runtime-squirrel.appspot.com',
	messagingSenderId: '315125018926',
	appId: '1:315125018926:web:867c7523baf42555738abf',
	measurementId: 'G-GV1GYZC02W'
})

export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const db = getDatabase(app)