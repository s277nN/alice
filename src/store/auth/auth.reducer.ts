import { createReducer } from '@reduxjs/toolkit'
import { configs } from '@/libs/configs'
import { setCookie } from '@/libs/cookies'
import { setAuthenticated, setProfile } from './auth.actions'
import { initialState } from './auth.state'

export default createReducer(initialState, (builder) => {
  return builder
    .addCase(setAuthenticated, (state, { payload }) => {
      state.address = payload
    })
    .addCase(setProfile, (state, { payload }) => {
      const user = { ...state.user, ...payload }
      state.user = user
      setCookie(configs.USER_INFO, user)
    })
})
