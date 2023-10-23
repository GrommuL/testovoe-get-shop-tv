import { InputHTMLAttributes, FC, Dispatch, KeyboardEvent } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  checkboxId: string
  checkboxLabel: string
  checked: boolean
  setChecked: Dispatch<React.SetStateAction<boolean>>
  tabIndex?: number
}

export const Checkbox: FC<Props> = ({
  checkboxId,
  checkboxLabel,
  checked,
  setChecked,
  tabIndex,
  ...otherProps
}) => {
  const checkboxOnKeyDownEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.key === 'Enter') setChecked((prev) => !prev)
  }

  return (
    <div className='flex items-center gap-[10px]'>
      <input
        className='w-[40px] h-[40px] border border-black  appearance-none relative before:hidden before:content-check before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:checked:block checked:bg-primary cursor-pointer outline-none focus:border-[2px]'
        type='checkbox'
        name={checkboxId}
        id={checkboxId}
        {...otherProps}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        onKeyDown={checkboxOnKeyDownEnter}
        tabIndex={tabIndex}
      />
      <label className='max-w-[170px] text-grey text-[14px] text-start' htmlFor={checkboxId}>
        {checkboxLabel}
      </label>
    </div>
  )
}
