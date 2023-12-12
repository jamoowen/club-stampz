import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import './theme-config.css'
import Navbar from '@/components/Navbar'
import { Theme } from '@radix-ui/themes';
// import '@radix-ui/themes/styles.css';


const inter = Inter({ subsets: ['latin'] })
const fontPlayFair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Club Stampz',
  description: 'Golf club customization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontPlayFair.variable}`}>

        <body className="bg-black text-white font-sans  antialiased">
          <Navbar />
          {children}</body>
      
    </html>
  )
}
