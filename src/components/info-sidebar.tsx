import { RoutesPath } from '@/config/routes-config'
import { CloseIcon } from './icons/close-icon'
import { LinkButton } from './link-button'

export const InfoSidebar = () => {
  return (
    <aside className='flex flex-col items-end justify-between h-full p-[20px]'>
      <LinkButton className='w-fit' variant='secondary' path={RoutesPath.home} tabIndex={1}>
        <CloseIcon />
      </LinkButton>
      <div className='flex items-center gap-[10px]'>
        <span className='text-white text-end max-w-[194px] uppercase'>
          Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
        </span>
        <div className='w-[110px] h-[110px] flex items-center justify-center bg-qr bg-center bg-no-repeat bg-contain' />
      </div>
    </aside>
  )
}
