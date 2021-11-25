import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { configs } from '@/libs/configs'

export const fireApp = initializeApp(configs.APP_FIREBASE)
export const db = getFirestore(fireApp)
