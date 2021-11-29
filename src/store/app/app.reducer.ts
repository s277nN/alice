import { createReducer } from '@reduxjs/toolkit'
import { setLanguage, setTheme, setDialog, setModal, setNotice } from './app.actions'
import { initialState } from './app.state'

export default createReducer(initialState, (builder) => {
  return builder
    .addCase(setLanguage, (state, { payload }) => {
      state.lang = payload
    })
    .addCase(setTheme, (state, { payload }) => {
      state.theme = payload
    })
    .addCase(setDialog, (state, { payload }) => {
      state.dialog = {
        ...payload,
        type: payload?.type || 'alert',
        confirmLabel: payload?.confirmLabel || 'OK',
        cancelLabel: payload?.cancelLabel || 'Cancel',
        resolve: payload?.resolve
      }
    })
    .addCase(setModal, (state, { payload }) => {
      state.modal = { ...state.modal, ...payload }
    })
    .addCase(setNotice, (state, { payload }) => {
      const { vid } = payload
      if (vid.startsWith('rm:') || vid.startsWith('remove:')) {
        const _vid = vid.replace(/^rm:|remove:/, '').trim()
        state.notice = state.notice.remove('vid', _vid)
      } else {
        state.notice = [payload, ...state.notice]
      }
    })
})
