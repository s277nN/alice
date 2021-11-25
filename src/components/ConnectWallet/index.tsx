import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { SUPPORTED_WALLETS } from '@/constants'
import { useAuth } from '@/hooks'
import { authSelector } from '@/store'
import { modal } from '@/utils'

export function ConnectWallet() {
  // __STATE <React.Hooks>
  const wallets = useMemo(() => SUPPORTED_WALLETS, [])
  const isAuthenticated = useSelector(authSelector.getAuthenticated)
  const { signin } = useAuth()

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    if (isAuthenticated) setTimeout(modal.off, 256)
  }, [isAuthenticated])

  // __RENDER
  return (
    <div className='ui--connect-wallet'>
      <ul className='ui--connect-wallet-group'>
        {wallets.map((record, index) => (
          <li className='ui--connect-wallet-list' key={index}>
            <button className='btn btn-wallet' onClick={() => signin(record.connector)}>
              <span className='text'>{record.name}</span>
              <img className='icon' src={`/static/images/${record.icon}`} />
            </button>
          </li>
        ))}
      </ul>

      <div className='ui--connect-wallet-footer'>
        <a
          className='btn btn-text btn-guide'
          href='https://docs.pancakeswap.finance/get-started/connection-guide'
          rel='noreferrer noopener'
          target='_blank'
        >
          <span className='icon bi bi-question-circle'></span>
          <span className='text'>Learn how to connect</span>
        </a>
      </div>
    </div>
  )
}
