import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useActiveWeb3React } from '@/hooks'
import { authSelector } from '@/store'
import { modal, shortAddress } from '@/utils'
import { UseModal } from '@/types'

export function NavbarComponent() {
  // __STATE <React.Hooks>
  const { active } = useActiveWeb3React()
  const user = useSelector(authSelector.getUser)

  // __FUNCTIONS
  const handleConnect = useCallback(() => {
    if (active) return void 0

    modal.on(UseModal.CONNECT_WALLET, { name: 'connect-wallet', title: 'Connect to a wallet' })
  }, [active])

  const handleAccount = useCallback(() => {
    if (!user) return void 0

    // modal.on(<AccountDetails />, { name: 'account', title: 'Account' })
  }, [user])

  // __RENDER
  return (
    <nav className='ui--navbar'>
      <div className='ui--navbar-container'>
        <div className='ui--navbar-column lf'></div>

        <div className='ui--navbar-column rg'>
          {user ? (
            <button className='btn btn-account' onClick={handleAccount}>
              <span className='icon bi bi-wallet'></span>
              <span className='text'>{shortAddress(user.uid)}</span>
            </button>
          ) : (
            <button className='btn btn-connect' onClick={handleConnect}>
              <span className='icon bi bi-wallet2'></span>
              <span className='text'>Connect Wallet</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
