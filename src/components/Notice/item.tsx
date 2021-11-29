import { useMemo, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Notice } from '@/types'
import cls from 'classnames'

export interface NoticeItemProps {
  record: Notice
  icon: string
  onRemove: (notice: Notice) => void
}

export function NoticeItem({ record, icon, onRemove }: NoticeItemProps) {
  // __STATE <React.Hooks>
  const [visible, setVisible] = useState(record.visible)
  const duration = useMemo(() => record.duration, [])

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
          <div className='content'>{record.content}</div>
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
