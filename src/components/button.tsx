import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props> = ({ children, type = 'button', className, ...otherProps }) => {
  return (
    <button
      className={clsx(
        'px-[30px] py-[12px] bg-transparent border border-black text-black uppercase font-medium flex items-center justify-center transition duration-[0.5s] ease-in-out hover:bg-black hover:text-white focus:bg-black focus:text-white outline-none disabled:pointer-events-none disabled:border-grey disabled:text-grey',
        className
      )}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  )
}
