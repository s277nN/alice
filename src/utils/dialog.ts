import { ReactNode } from 'react'
import { dispatch, appActions } from '@/store'

export interface Dialog {
  visible: boolean
  type?: 'alert' | 'confirm'
  title?: string
  children: ReactNode
  confirmLabel?: string
  cancelLabel?: string
  resolvePromise?: (value: DialogResults | PromiseLike<DialogResults>) => void
  rejectPromise?: (reason?: any) => void
}

export interface DialogOptions extends Omit<Dialog, 'visible' | 'resolvePromise' | 'rejectPromise'> {}

export interface DialogResults {
  isConfirmed: boolean
  isDenied: boolean
}

/**
 * Alert box.
 *
 * @param {DialogOptions | string} options
 */
export async function dialog(options: DialogOptions | string): Promise<DialogResults> {
  return new Promise((resolve, reject) => {
    let payload: any = {
      visible: true,
      resolvePromise: resolve,
      rejectPromise: reject
    }

    if (typeof options === 'string') {
      payload.children = options
    } else {
      payload = { ...payload, ...options }
    }

    const action = appActions.setDialog(payload)
    dispatch(action)
  })
}
