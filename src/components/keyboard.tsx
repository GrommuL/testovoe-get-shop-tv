import { FC } from 'react'
import { Button } from './button'

interface Props {
  keyboardKeyHandler: (keyValue: string) => void
}

export const Keyboard: FC<Props> = ({ keyboardKeyHandler }) => {
  const keyboardNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <div className='grid grid-cols-3 gap-[10px]'>
      {keyboardNumbers.map((keyboardNumber, index) => (
        <Button
          type='button'
          tabIndex={index + 3}
          key={keyboardNumber}
          onClick={() => keyboardKeyHandler(keyboardNumber)}
        >
          {keyboardNumber}
        </Button>
      ))}
      <Button
        type='button'
        className='col-span-2'
        tabIndex={12}
        onClick={() => keyboardKeyHandler('delete')}
      >
        Стереть
      </Button>
      <Button type='button' tabIndex={13} onClick={() => keyboardKeyHandler('0')}>
        0
      </Button>
    </div>
  )
}
