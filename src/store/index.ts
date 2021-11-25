import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { isTestnet } from '@/libs/configs'
import app from './app/app.reducer'
import auth from './auth/auth.reducer'

const createReducer = combineReducers({ app, auth })

const createStore = configureStore({
  reducer: createReducer,
  devTools: isTestnet,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: true,
      immutableCheck: true
    })
  }
})

export type StoreTypes = ReturnType<typeof createStore.getState>
export type StoreDispatch = typeof createStore.dispatch
export type StoreThunk<ReturnType = void> = ThunkAction<ReturnType, StoreTypes, unknown, Action<string>>

export default createStore
export const { dispatch } = createStore

export * as appActions from './app/app.actions'
export * as appSelector from './app/app.selectors'
export * as authActions from './auth/auth.actions'
export * as authSelector from './auth/auth.selectors'
