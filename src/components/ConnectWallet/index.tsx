import { useEffect, useMemo } from 'react'
import { SUPPORTED_WALLETS } from '@/constants'
import { useAuth } from '@/hooks'
import { modal } from '@/utils'

export function ConnectWallet() {
  // __STATE <React.Hooks>
  const wallets = useMemo(() => SUPPORTED_WALLETS, [])
  const { active, signin } = useAuth()

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    if (active) setTimeout(modal.off, 256)
  }, [active])

  // __RENDER
  return (
    <div className='ui--connect-wallet'>
      <ul className='ui--connect-wallet-group'>
        {wallets.map((record, index) => (
          <li className='ui--connect-wallet-list' key={index}>
            <button className='btn btn-wallet' onClick={() => signin(record.connector)}>
              <img className='icon' src={`/static/images/${record.icon}`} />
              <div className='text'>
                <h4 className='h4'>{record.name}</h4>
                <h6 className='h6'>{record.description}</h6>
              </div>
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
