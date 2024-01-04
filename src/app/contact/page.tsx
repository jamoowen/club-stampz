import ContactForm from '@/components/ContactForm'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import ContactComponent from '../products/ContactComponent'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <main className="h-full flex mt-5 flex-col overflow-hidden min-h-screen ">


      <div className='flex flex-col mt-10 relative items-center mb-10 gap-10'>
        <div className=' flex h-min p-5 gap-5 flex-col w-[250px] sm:w-[350px] md:w-[500px] sm:text-3xl  backdrop-brightness-50 justify-center items-center text-center text-xl '>
          We are currently available only within England and can be contacted through our Instagram page, or by filling out the below email form.
        </div>
        <div >
          <Link href="https://www.instagram.com/club_stamps_za/" className='font-sans group flex flex-row shrink-0 gap-2 text-xl justify-center items-center'>
            @club_stamps_za
            <span className='group-hover:text-red-600'>
              <Instagram />
              </span>
          </Link>
        </div>

        <ContactComponent/>






      </div>

    </main>
  )
}

export default page