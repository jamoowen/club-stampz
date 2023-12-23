import { FC } from 'react'
import InstagramEmbed from '@/components/InstagramEmbed'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="h-full flex py-10 flex-col overflow-hidden min-h-screen ">

      <div className='flex flex-col  items-center'>
        


        <InstagramEmbed />




      </div>

    </main>
  )
}

export default page