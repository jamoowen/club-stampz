'use client'

import sanityConfig from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <NextStudio config={sanityConfig} />
  )
}

export default page