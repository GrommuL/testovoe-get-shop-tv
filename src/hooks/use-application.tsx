import { useState, FormEvent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesPath } from '@/config/routes-config'

export const useApplication = () => {
  const navigate = useNavigate()
  const [telValue, setTelValue] = useState('7')
  const [checked, setChecked] = useState(false)
  const [selectedButton, setSelectedButton] = useState(14)

  const applicationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const applicationDataFromForm = new FormData(event.currentTarget)
    const application = {
      telephone: applicationDataFromForm.get('telephone'),
      acceptPersonalInformationTerms: Boolean(applicationDataFromForm.get('active'))
    }
    console.log(application)
    navigate(RoutesPath.application_success)
  }

  const keyboardKeyHandler = (keyValue: string) => {
    if (keyValue === 'delete' && telValue.length > 1) {
      setTelValue((prev) => prev.slice(0, -1))
    }
    if (telValue.length < 11 && keyValue !== 'delete') {
      setTelValue((prev) => prev + keyValue)
    }
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Backspace':
          keyboardKeyHandler('delete')
          break
        case '1':
          keyboardKeyHandler('1')
          break
        case '2':
          keyboardKeyHandler('2')
          break
        case '3':
          keyboardKeyHandler('3')
          break
        case '4':
          keyboardKeyHandler('4')
          break
        case '5':
          keyboardKeyHandler('5')
          break
        case '6':
          keyboardKeyHandler('6')
          break
        case '7':
          keyboardKeyHandler('7')
          break
        case '8':
          keyboardKeyHandler('8')
          break
        case '9':
          keyboardKeyHandler('9')
          break
        case '0':
          keyboardKeyHandler('0')
          break

        case 'ArrowLeft':
          if (selectedButton === 14 && checked === false) {
            setSelectedButton(12)
          } else if (selectedButton > 0) {
            setSelectedButton((prev) => prev - 1)
          } else if (selectedButton === 0) {
            setSelectedButton(14)
          }
          break
        case 'ArrowRight':
          if (selectedButton === 12 && checked === false) {
            setSelectedButton(14)
          } else if (selectedButton < 14) {
            setSelectedButton((prev) => prev + 1)
          } else if (selectedButton === 14) {
            setSelectedButton(0)
          }
          break
        case 'ArrowDown':
          if (selectedButton === 12 && checked === false) {
            setSelectedButton(14)
          } else if (selectedButton === 7 || selectedButton === 8) {
            setSelectedButton(10)
          } else if (selectedButton === 9) {
            setSelectedButton(11)
          } else if (selectedButton === 10 || selectedButton === 11) {
            setSelectedButton(12)
          } else if (selectedButton >= 1 && selectedButton < 11) {
            setSelectedButton((prev) => prev + 3)
          } else if (selectedButton < 14) {
            setSelectedButton((prev) => prev + 1)
          } else if (selectedButton === 14) {
            setSelectedButton(0)
          }
          break
        case 'ArrowUp':
          if (selectedButton === 14 && checked === false) {
            setSelectedButton(12)
          } else if (selectedButton === 11) {
            setSelectedButton(9)
          } else if (selectedButton === 10) {
            setSelectedButton(7)
          } else if (selectedButton === 12) {
            setSelectedButton(10)
          } else if (selectedButton === 1 || selectedButton === 2 || selectedButton === 3) {
            setSelectedButton(0)
          } else if (selectedButton === 0) {
            setSelectedButton(14)
          } else if (selectedButton > 1 && selectedButton < 11) {
            setSelectedButton((prev) => prev - 3)
          } else if (selectedButton > 0) {
            setSelectedButton((prev) => prev - 1)
          }
          break
      }
    },
    [selectedButton, checked]
  )

  return {
    telValue,
    setTelValue,
    checked,
    setChecked,
    applicationSubmit,
    keyboardKeyHandler,
    handleKeyDown,
    selectedButton,
    setSelectedButton
  }
}
