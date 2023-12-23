import { Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {

}


const Footer: FC<FooterProps> = ({ }) => {
    return (
        <div className='border-t border-opacity-20 border-white bg-zinc-900 pt-10 px-2'>
            <div className='flex gap-2 items-center'>
                <div className='font-semibold text-2xl mr-5'>
                    Contact us
                </div>

                <div className='rounded-full w-12 h-12  hover:border-underlineColor items-center justify-center flex border border-white'>
                    <Link
                        href="/https://www.instagram.com/club_stamps_za/"
                        target='_blank'
                    >
                        <Instagram className='w-[22px] h-[22px] hover:w-[24px] transition hover:h-[24px] ' />
                    </Link>
                </div>

                <div className='rounded-full w-12 h-12  hover:border-underlineColor flex items-center justify-center border border-white'>
                    <Link href="/contact">
                        <Mail className='w-[22px] h-[22px] hover:w-[24px] transition hover:h-[24px] ' />
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