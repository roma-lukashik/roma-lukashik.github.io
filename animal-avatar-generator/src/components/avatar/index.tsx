import { FC, useEffect, useRef } from 'react'
import avatar from 'animal-avatar-generator'
import './index.css'

type Props = {
  name: string;
  size: number;
}

export const Avatar: FC<Props> = ({
  name,
  size,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = avatar(name, { size })
    }
  }, [name, size])

  return <div className="img" ref={ref}/>
}