import { dispatch, appActions } from '@/store'

export enum UseModal {
  CLOSE = '@MODAL:CLOSE',
  CONNECT_WALLET = '@MODAL:CONNECT_WALLET',
  ACCOUNT_DETAILS = '@MODAL:ACCOUNT_DETAILS'
}

export interface Modal {
  visible: boolean
  title?: string
  name?: string
  component: UseModal | null
}

export interface ModalOptions extends Pick<Modal, 'name' | 'title'> {}

export class modal {
  static on(component: UseModal, options?: ModalOptions) {
    const payload: Modal = {
      visible: true,
      name: options?.name,
      title: options?.title,
      component
    }

    dispatch(appActions.setModal(payload))
  }

  static off() {
    const payload: any = { visible: false }
    dispatch(appActions.setModal(payload))
  }
}
