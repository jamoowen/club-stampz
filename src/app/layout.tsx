import type { Metadata } from 'next'
import { Inter, Playfair_Display, PT_Serif, Roboto_Slab } from 'next/font/google'
import './globals.css'
import './theme-config.css'
import Navbar from '@/components/Navbar'
import { Theme } from '@radix-ui/themes';
import Footer from '@/components/Footer'
import { Toaster } from "@/components/ui/toaster"

// import '@radix-ui/themes/styles.css';


const inter = Inter({ subsets: ['latin'] })
const fontPlayFair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const fontPtSerif = PT_Serif({ subsets: ['latin'], weight:'400', variable: '--font-pt-serif' })
const fontRobotoSlab = Roboto_Slab({subsets: ['latin'], variable: '--font-roboto-slab'})

export const metadata: Metadata = {
  title: 'Club Stamps',
  description: 'Golf club customization',
}

export const revalidate = 20;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontPlayFair.variable} ${fontPtSerif.variable} ${fontRobotoSlab.variable}`}>

        <body className="bg-black min-h-screen w-full pt-10 text-white font-robot-slab">
          <Navbar />
          {children}
          <Toaster />
          <Footer />
          </body>
      
    </html>
  )
}
