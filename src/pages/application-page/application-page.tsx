import { useEffect, useRef } from 'react'
import { Button } from '@/components/button'
import { Checkbox } from '@/components/checkbox'
import { InfoSidebar } from '@/components/info-sidebar'
import { Input } from '@/components/input'
import { Keyboard } from '@/components/keyboard'
import { useApplication } from '@/hooks/use-application'
import { useNavigate } from 'react-router-dom'

const ApplicationPage = () => {
  const {
    applicationSubmit,
    checked,
    setChecked,
    telValue,
    keyboardKeyHandler,
    setTelValue,
    handleKeyDown,
    selectedButton
  } = useApplication()
  const focusableElements = useRef<NodeListOf<Element>>()
  const navigate = useNavigate()

  useEffect(() => {
    let sleepTimer = setTimeout(() => {
      navigate('/')
    }, 10000)

    const resetTimer = () => {
      clearTimeout(sleepTimer)
      sleepTimer = setTimeout(() => {
        navigate('/')
      }, 10000)
    }

    const handleRemoveTimer = () => {
      resetTimer()
    }

    document.addEventListener('mousemove', handleRemoveTimer)
    document.addEventListener('keydown', handleRemoveTimer)

    resetTimer()

    return () => {
      clearTimeout(sleepTimer)
      document.removeEventListener('mousemove', handleRemoveTimer)
      document.removeEventListener('keydown', handleRemoveTimer)
    }
  }, [])

  useEffect(() => {
    focusableElements.current = document.querySelectorAll('[tabIndex]')
    focusableElements.current.forEach((el, idx) => {
      if (idx === selectedButton) {
        ;(el as HTMLElement).focus()
      }
    })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedButton, checked])

  return (
    <main className='h-full'>
      <section className='w-full h-full flex items-center justify-between bg-main bg-no-repeat'>
        <form
          className='w-[380px] h-full bg-blue py-[40px] px-[24px] flex flex-col items-center gap-[13px] text-center'
          onSubmit={applicationSubmit}
        >
          <h1 className='text-[26px]'>Введите ваш номер мобильного телефона</h1>
          <Input
            tabIndex={2}
            id='telephone'
            name='telephone'
            mask={'+7(999)999-99-99'}
            // type='tel'
            value={telValue}
            placeholder='+7(___)___-__-__'
            setTelValue={setTelValue}
          />
          <p>и с Вами свяжется наш менеджер для дальнейшей консультации</p>
          <Keyboard keyboardKeyHandler={keyboardKeyHandler} />
          <Checkbox
            checkboxId='personal-information'
            checkboxLabel=' Согласие на обработку персональных данных'
            checked={checked}
            setChecked={setChecked}
            tabIndex={14}
            name='active'
          />
          <Button type='submit' disabled={telValue.length < 11 || !checked} tabIndex={15}>
            Подтвердить номер
          </Button>
        </form>
        <InfoSidebar />
      </section>
    </main>
  )
}

export default ApplicationPage
