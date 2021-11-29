import { useCallback, useMemo } from 'react'
import { useAppDispatch, useAppSelector, appActions, appSelector } from '@/store'
import { Notice } from '@/types'
import { NoticeItem } from './item'

export function NoticeContainer() {
  // __STATE <React.Hooks>
  const dispatch = useAppDispatch()
  const notices = useAppSelector(appSelector.getNotice)
  const icon = useMemo(
    () => ({
      info: 'bi-megaphone-fill',
      success: 'bi-check-circle-fill',
      warn: 'bi-exclamation-circle-fill',
      error: 'bi-exclamation-triangle-fill'
    }),
    []
  )

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
        <NoticeItem key={record.vid} record={record} icon={icon[record.type]} onRemove={handleRemove} />
      ))}
    </div>
  )
}
