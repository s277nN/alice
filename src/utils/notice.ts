import { ReactNode } from 'react'
import { dispatch, appActions } from '@/store'
import { generateId } from '@/utils'

export interface Notice {
  vid: string
  visible: boolean
  type: 'info' | 'success' | 'warn' | 'error'
  name?: string
  title: string
  content: ReactNode
  duration?: number
}

export type NoticeOptions = Omit<Notice, 'vid' | 'visible' | 'type'>

const defaultOptions = { visible: true, duration: 3e3 }

function setNotice(options: Omit<Notice, 'vid'>) {
  const action = appActions.setNotice({ ...options, vid: generateId() })
  dispatch(action)
}

export class notice {
  static info(options: NoticeOptions) {
    setNotice({
      type: 'info',
      ...defaultOptions,
      ...options
    })
  }

  static success(options: NoticeOptions) {
    setNotice({
      type: 'success',
      ...defaultOptions,
      ...options
    })
  }

  static warn(options: NoticeOptions) {
    setNotice({
      type: 'warn',
      ...defaultOptions,
      ...options
    })
  }

  static error(options: NoticeOptions) {
    setNotice({
      type: 'error',
      ...defaultOptions,
      ...options
    })
  }
}
