import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { DialogContainer, ModalContainer, NavbarComponent, NoticeContainer } from '@/components'
import { useEagerConnect, useInactiveListener } from '@/hooks'
import { RouterViewProvider } from '@/router'
import store from '@/store'

export default function Application() {
  // __STATE <React.Hooks>
  useEagerConnect()
  useInactiveListener()

  // __RENDER
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />

        <DialogContainer />
        <ModalContainer />
        <NoticeContainer />

        <RouterViewProvider />
      </BrowserRouter>
    </Provider>
  )
}
