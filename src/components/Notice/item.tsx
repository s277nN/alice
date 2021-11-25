import { useMemo, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Notice } from '@/types'
import cls from 'classnames'

export interface NoticeItemProps {
  record: Notice
  onRemove: (notice: Notice) => void
}

export function NoticeItem({ record, onRemove }: NoticeItemProps) {
  // __STATE <React.Hooks>
  const [visible, setVisible] = useState(record.visible)
  const duration = useMemo(() => record.duration, [])
  const icon = useMemo(() => {
    return {
      info: 'bi-megaphone-fill',
      success: 'bi-check-circle-fill',
      warn: 'bi-exclamation-circle-fill',
      error: 'bi-x-circle-fill'
    }[record.type]
  }, [])

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    if (duration) {
      setTimeout(() => setVisible(false), duration + 320)
    }
  }, [duration])

  // __RENDER
  return (
    <CSSTransition in={visible} timeout={400} unmountOnExit={true} onExited={() => onRemove(record)}>
      <div className='ui--notice-item'>
        <div className={cls('ui--notice-icon', record.type)}>
          <span className={cls('icon', 'bi', icon)}></span>
        </div>

        <div className='ui--notice-content'>
          <h4 className='title'>{record.title}</h4>
          {typeof record.children === 'string' ? (
            <div className='message' dangerouslySetInnerHTML={{ __html: record.children }}></div>
          ) : (
            <div className='message'>{record.children}</div>
          )}
        </div>

        <div className='ui--notice-close'>
          <button className='btn btn-close' title='Close.' onClick={() => setVisible(false)}>
            <span className='icon bi bi-x-lg'></span>
          </button>
        </div>
      </div>
    </CSSTransition>
  )
}
