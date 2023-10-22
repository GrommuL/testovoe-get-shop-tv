import { Dispatch, FC } from 'react'
import { Button } from './button'

interface Props {
  telValue: string
  setTelValue: Dispatch<React.SetStateAction<string>>
}

export const Keyboard: FC<Props> = ({ telValue, setTelValue }) => {
  const keyboardNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  const keyboardKeyHandler = (keyValue: string) => {
    if (keyValue === 'delete') {
      setTelValue((prev) => prev.slice(0, -1))
    }
    if (telValue.length < 10 && keyValue !== 'delete') {
      setTelValue((prev) => prev + keyValue)
    }
  }
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
