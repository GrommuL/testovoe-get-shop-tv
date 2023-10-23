import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  mask: string | (string | RegExp)[]
  setTelValue: React.Dispatch<React.SetStateAction<string>>
}

export const Input: FC<Props> = ({ className, mask, setTelValue, ...otherProps }) => {
  return (
    <InputMask
      mask={mask}
      onChange={(e) => setTelValue((prev) => prev + e.target.value)}
      className={clsx(
        'w-full text-[32px] font-bold uppercase outline-none border-none bg-transparent placeholder:text-black max-w-[265px]',
        className
      )}
      {...otherProps}
    />
  )
}
