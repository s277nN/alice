import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { appActions, appSelector } from '@/store'
import { scrollOff, addEventListener, removeEventListener } from '@/utils'

export function DialogContainer() {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const dialog = useSelector(appSelector.getDialog)
  const useConfirm = useMemo(() => dialog.type === 'confirm', [dialog])

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    function listener(event: KeyboardEvent) {
      let keyCode: string = event.code || event.key

      switch (keyCode) {
        case 'Enter':
        case 'Space':
          // event.preventDefault()
          handleClose()
          break

        case 'Escape':
          // event.preventDefault()
          handleClose(false)
          break
      }
    }

    if (dialog.visible) {
      handleFocus()
      addEventListener('keydown', listener)
    } else {
      setTimeout(() => {
        removeEventListener('keydown', listener)
      }, 1e3)
    }
  }, [dialog.visible])

  // __FUNCTIONS
  const handleClose = (value: boolean = true) => {
    if (dialog.resolvePromise) {
      dialog.resolvePromise({
        isConfirmed: value,
        isDenied: !value
      })
    }

    const payload = {
      ...dialog,
      visible: false,
      resolvePromise: void 0,
      rejectPromise: void 0
    }

    dispatch(appActions.setDialog(payload))
  }

  const handleFocus = (): void => {
    const button: any = document.querySelector('.ui--dialog .btn-confirm')
    if (button) button.focus()
  }

  // __RENDER
  return (
    <CSSTransition
      in={dialog.visible}
      timeout={160}
      unmountOnExit={true}
      onEnter={() => scrollOff(true)}
      onExited={() => scrollOff(false)}
    >
      <div className='ui--dialog'>
        <div className='ui--dialog-container'>
          <div className='ui--dialog-header'>
            <div className='title'>{dialog.title || 'System Alert'}</div>

            <button type='button' className='btn btn-close' onClick={() => handleClose(false)}>
              <span className='icon bi bi-x'></span>
            </button>
          </div>

          {typeof dialog.children === 'string' ? (
            <div className='ui--dialog-body' dangerouslySetInnerHTML={{ __html: dialog.children }}></div>
          ) : (
            <div className='ui--dialog-body'>{dialog.children}</div>
          )}

          <div className='ui--dialog-footer'>
            {useConfirm && (
              <button type='button' className='btn btn-close' onClick={() => handleClose(false)}>
                <span className='text'>{dialog.cancelLabel}</span>
              </button>
            )}

            <button type='button' className='btn btn-primary2 btn-confirm' onClick={() => handleClose()}>
              <span className='text'>{dialog.confirmLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
