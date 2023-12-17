import { Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {

}


const Footer: FC<FooterProps> = ({ }) => {
    return (
        <div className='border-t bg-zinc-900 pt-10 px-2'>
            <div className='flex gap-2 items-center'>
                <div className='font-semibold mr-5'>
                    Contact us
                </div>

                <div className='rounded-full w-14 h-14  hover:border-underlineColor items-center justify-center flex border border-white'>
                    <Link
                        href="/https://www.instagram.com/club_stamps_za/"
                        target='_blank'
                    >
                        <Instagram className='w-[31px] h-[31px] hover:w-8 transition hover:h-8 ' />
                    </Link>
                </div>

                <div className='rounded-full w-14 h-14  hover:border-underlineColor flex items-center justify-center border border-white'>
                    <Link href="/contact">
                        <Mail className='w-[31px] h-[31px] hover:w-8 transition hover:h-8 ' />
                    </Link>
                </div>
             
            </div>
            <div className='text-[0.5rem] mt-5 text-zinc-400'>
                @2023 James Owen Development
            </div>

        </div>
    )
}

export default Footer