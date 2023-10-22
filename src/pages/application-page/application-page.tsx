import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/button'
import { Checkbox } from '@/components/checkbox'
import { InfoSidebar } from '@/components/info-sidebar'
import { Input } from '@/components/input'
import { Keyboard } from '@/components/keyboard'
import { RoutesPath } from '@/config/routes-config'

const ApplicationPage = () => {
  const navigate = useNavigate()
  const [telValue, setTelValue] = useState('')
  const [checked, setChecked] = useState(false)

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
            mask={'+7(999) 999-99-99'}
            type='tel'
            value={telValue}
            placeholder='+7(___)___-__-__'
          />
          <p>и с Вами свяжется наш менеджер для дальнейшей консультации</p>
          <Keyboard telValue={telValue} setTelValue={setTelValue} />
          <Checkbox
            checkboxId='personal-information'
            checkboxLabel=' Согласие на обработку персональных данных'
            checked={checked}
            setChecked={setChecked}
            tabIndex={14}
            name='active'
          />
          <Button type='submit' disabled={telValue.length < 10 || !checked} tabIndex={15}>
            Подтвердить номер
          </Button>
        </form>
        <InfoSidebar />
      </section>
    </main>
  )
}

export default ApplicationPage
