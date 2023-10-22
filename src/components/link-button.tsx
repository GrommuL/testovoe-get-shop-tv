import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type LinkButtonVariant = 'primary' | 'secondary'

interface Props {
  path: string
  label?: string
  className?: string
  variant?: LinkButtonVariant
  children?: ReactNode
  tabIndex?: number
}

export const LinkButton: FC<Props> = ({
  path,
  label,
  className,
  variant = 'primary',
  children,
  tabIndex
}) => {
  return (
    <Link
      tabIndex={tabIndex}
      className={clsx(
        'flex items-center justify-center shrink-0 font-medium border border-transparent transition duration-[0.5s] ease-in-out outline-none',
        {
          primary:
            'p-[16px] bg-black text-white min-w-[156px] stroke-white hover:bg-white hover:text-black hover:border-black hover:stroke-black focus:bg-white focus:text-black focus:border-black focus:stroke-black',
          secondary:
            'px-[16px] py-[8px] bg-white text-black border-black stroke-black hover:bg-black hover:text-white hover:border-transparent hover:stroke-white focus:bg-black focus:text-white focus:border-transparent focus:stroke-white'
        }[variant],
        className
      )}
      to={path}
    >
      {label}
      {children}
    </Link>
  )
}
