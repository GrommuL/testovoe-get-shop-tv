import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  mask: string | (string | RegExp)[]
}

export const Input: FC<Props> = ({ className, mask, ...otherProps }) => {
  return (
    <InputMask
      mask={mask}
      className={clsx(
        'w-full text-[32px] font-bold uppercase outline-none border-none bg-transparent placeholder:text-black max-w-[280px]',
        className
      )}
      {...otherProps}
    />
  )
}
