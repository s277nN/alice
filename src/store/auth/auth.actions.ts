import { createAction } from '@reduxjs/toolkit'
import { User } from '@/types'

export enum ActionTypes {
  SET_AUTH = 'SET_AUTH_AUTHENTICATED',
  SET_USER = 'SET_AUTH_USER_PROFILE'
}

export const setAuthenticated = createAction<string, ActionTypes.SET_AUTH>(ActionTypes.SET_AUTH)
export const setProfile = createAction<User, ActionTypes.SET_USER>(ActionTypes.SET_USER)
