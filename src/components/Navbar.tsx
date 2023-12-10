import Link from 'next/link'
import { FC } from 'react'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    return (
        <nav className="fixed top-0 left-0 z-50 flex flex-row justify-between w-full px-2 text-white shrink-0 bg-background">
            <Link href="/" >
            Home
            </Link>
            <Link href="/admin" >
            Admin
            </Link>

        </nav>

    )
}

export default Navbar