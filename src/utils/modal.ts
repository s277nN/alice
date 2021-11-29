import { ReactChild, ReactFragment, ReactPortal } from 'react'
import { dispatch, appActions } from '@/store'
import { UseModal } from '@/types'

export type ModalChild = ReactChild | ReactFragment | ReactPortal | UseModal

export interface Modal {
  visible: boolean
  title?: string
  name?: string
  children: ModalChild | null
}

export interface ModalOptions extends Pick<Modal, 'name' | 'title'> {}

export class modal {
  static on(children: ModalChild, options?: ModalOptions) {
    const payload: Modal = {
      visible: true,
      name: options?.name,
      title: options?.title,
      children
    }

    dispatch(appActions.setModal(payload))
  }

  static off() {
    const payload: any = { visible: false }
    dispatch(appActions.setModal(payload))
  }
}
