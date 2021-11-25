import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appActions, appSelector } from '@/store'
import { Notice } from '@/types'
import { NoticeItem } from './item'

export function NoticeContainer() {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const notices = useSelector(appSelector.getNotice)

  // __FUNCTIONS
  const handleRemove = useCallback((notice: Notice) => {
    const payload: Notice = {
      ...notice,
      vid: `rm: ${notice.vid}`,
      visible: false
    }

    dispatch(appActions.setNotice(payload))
  }, [])

  // __RENDER
  return (
    <div className='ui--notice'>
      {notices.map((record) => (
        <NoticeItem key={record.vid} record={record} onRemove={handleRemove} />
      ))}
    </div>
  )
}
