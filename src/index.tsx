import { render } from 'react-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from '@/utils/connectors'
import AppContainer from '@/App'
import '@/utils/defineProperty'
import '@styles/main.scss'

// Create React App.
render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <AppContainer />
  </Web3ReactProvider>,
  document.getElementById('app')
)
