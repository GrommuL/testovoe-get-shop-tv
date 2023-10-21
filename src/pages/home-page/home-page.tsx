import promo from '@/assets/video/promo.mp4'
import { LinkButton } from '@/components/link-button'
import { Video } from '@/components/video'
import { RoutesPath } from '@/config/routes-config'

const HomePage = () => {
  return (
    <main className='h-full'>
      <section className='relative w-full h-full flex items-center justify-end'>
        <Video src={promo} autoPlay loop muted />
        <aside className='w-[251px] h-[357px] bg-blue p-[30px_10px_10px] flex flex-col items-center gap-[20px] shrink-0'>
          <h1 className='uppercase font-medium text-center max-w-[231px]'>
            ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
            <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
          </h1>
          <div className='w-[126px] h-[126px] flex items-center justify-center bg-qr bg-center bg-no-repeat bg-contain' />
          <p className='text-[14px] max-w-[126px] text-center'>Сканируйте QR-код или нажмите ОК</p>
          <LinkButton path={RoutesPath.application} label='ОК' />
        </aside>
      </section>
    </main>
  )
}

export default HomePage
