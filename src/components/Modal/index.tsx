import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { AccountDetails, ConnectWallet } from '@/components'
import { appActions, appSelector } from '@/store'
import { modal, scrollOff } from '@/utils'
import { Modal, UseModal } from '@/types'
import cls from 'classnames'

function renderCurrentContant(name: UseModal | null) {
  switch (name) {
    case UseModal.CONNECT_WALLET:
      return <ConnectWallet />

    case UseModal.ACCOUNT_DETAILS:
      return <AccountDetails />

    default:
      return null
  }
}

export function ModalContainer() {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const state = useSelector(appSelector.getModal)

  // __FUNCTIONS
  const handleOnExited = useCallback(() => {
    const payload: Modal = {
      visible: false,
      name: void 0,
      title: void 0,
      component: null
    }

    dispatch(appActions.setModal(payload))
    scrollOff(false)
  }, [])

  // __RENDER
  return (
    <CSSTransition
      in={state.visible}
      timeout={400}
      unmountOnExit={true}
      onEnter={() => scrollOff(true)}
      onExited={handleOnExited}
    >
      <div className='ui--modal'>
        <div className={cls('ui--modal-container', state.name)}>
          <div className='ui--modal-header'>
            <div className='title'>{state.title || 'Modal Title'}</div>

            <button type='button' className='btn btn-close' onClick={modal.off}>
              <span className='icon bi bi-x'></span>
            </button>
          </div>

          <div className='ui--modal-boby'>{renderCurrentContant(state.component)}</div>
        </div>
      </div>
    </CSSTransition>
  )
}
