import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface NavbarProps {

}

const navbarLinks = {
    products: {
        name: 'Products',
        link: '/products'
    },
    about: {
        name: 'About',
        link: '/about'
    },
    pricing: {
        name: 'Pricing',
        link: '/pricing'
    },
    contact: {
        name: 'Contact',
        link: '/contact'
    },
    admin: {
        name: 'admin',
        link: '/admin'
    },
  
}

const Navbar: FC<NavbarProps> = ({ }) => {
    return (
        <nav className="fixed top-0 left-0 p-1 space-x-10 font-semibold items-center z-50 flex flex-row  w-full px-2 text-white shrink-0 bg-background">
            <Link href="/" >
                <Image
                    width={30}
                    height={30}
                    alt='Club Stampz logo'
                    src='/images/logo.png'
                />

            </Link>

            {
                Object.entries(navbarLinks).map(([key, value]) => (
                    <Link 
                    key={key} 
                    href={value.link} 
                    className='hover:underline underline-offset-4 decoration-red-700'
                    >
                        {value.name}
                    </Link>
                ))
            }
      

        </nav>

    )
}

export default Navbar