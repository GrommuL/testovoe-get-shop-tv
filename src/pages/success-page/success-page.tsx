import { InfoSidebar } from '@/components/info-sidebar'

export const SuccessPage = () => {
  return (
    <main className='h-full'>
      <section className='w-full h-full flex items-center justify-between bg-main bg-no-repeat'>
        <div className='w-[380px] h-full bg-blue py-[40px] px-[24px] flex flex-col items-center justify-center gap-[13px] text-center'>
          <div className='max-w-[285px] flex flex-col gap-[15px]'>
            <h1 className='text-[34px] font-bold uppercase'>ЗАЯВКА ПРИНЯТА</h1>
            <p className='text-[14px]'>
              Держите телефон под рукой.
              <br />
              Скоро с Вами свяжется наш менеджер.
            </p>
          </div>
        </div>
        <InfoSidebar />
      </section>
    </main>
  )
}
