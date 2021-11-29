// import { useEffect } from 'react'
import { dialog, modal, notice } from '@/utils'
import { UseDialog as Dialog } from '@/types'
import '@styles/pages/home.scss'

export default function HomeContainer() {
  // __STATE <React.Hooks>

  // __EFFECTS <Rect.Hooks>

  // __FUNCTIONS
  const a = async () => {
    let x = await dialog(Dialog.DEMO, { type: 'confirm' })
    console.log(x)
  }

  // __RENDER
  return (
    <div className='ui--home router-view'>
      <div className='ui--home-container'>
        <p style={{ padding: '0 0 2rem' }}>.ui--home-container</p>
        <button className=' btn btn-secondary' onClick={a}>
          dialog
        </button>{' '}
        <button className=' btn btn-secondary' onClick={() => modal.on(<i>ChildrenNode</i>)}>
          modal
        </button>{' '}
        <button
          className=' btn btn-secondary'
          onClick={() => notice.info({ title: 'Text title.', content: <i>ChildrenNode</i> })}
        >
          notice
        </button>
      </div>
    </div>
  )
}
