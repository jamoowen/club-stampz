import { FC } from 'react'
import InstagramEmbed from '@/components/InstagramEmbed'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="h-full flex py-10 flex-col overflow-hidden min-h-screen ">

      <div className='flex flex-col  items-center'>
      <div className='flex h-min sm:text-lg whitespace-pre-line text-sm ps-10 pe-5 py-5 flex-col backdrop-brightness-50 rounded-sm md:w-[750px] sm:w-[500px] lg:w-[900px] my-5 w-[326px] '>
        about us
        </div>


        <InstagramEmbed />




      </div>

    </main>
  )
}

export default page