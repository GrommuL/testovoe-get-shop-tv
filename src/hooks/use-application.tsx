import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesPath } from '@/config/routes-config'

export const useApplication = () => {
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

  return {
    telValue,
    setTelValue,
    checked,
    setChecked,
    applicationSubmit
  }
}
