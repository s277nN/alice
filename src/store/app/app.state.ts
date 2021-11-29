import { Dialog, Modal, Notice, Theme } from '@/types'

interface AppState {
  appVersion: string
  lang: string
  theme: Theme
  dialog: Dialog
  modal: Modal
  notice: Notice[]
}

export const initialState: AppState = {
  appVersion: 'v0.1-beta (Nov, 2021)',
  lang: 'en-US',
  theme: 'default',
  dialog: {
    visible: false,
    type: 'alert',
    children: null
  },
  modal: {
    visible: false,
    children: null
  },
  notice: []
}
