import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  path: string
  label: string
  className?: string
}

export const LinkButton: FC<Props> = ({ path, label, className }) => {
  return (
    <Link
      className={clsx(
        'bg-black p-[16px] flex items-center justify-center shrink-0 font-medium text-white min-w-[156px] border border-transparent hover:bg-white hover:text-black hover:border-black transition duration-[0.5s] ease-in-out',
        className
      )}
      to={path}
    >
      {label}
    </Link>
  )
}
