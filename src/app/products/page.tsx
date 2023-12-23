import VideoPlayer from '@/components/VideoPlayer'
import { getProductPageData } from '@/sanity/sanity-utils'
import { productPageData } from '@/types/sanity-types'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = async ({ }) => {
  const data: productPageData = (await getProductPageData())[0]
  const richText = data.myRichTextExample

  const components: PortableTextComponents = {
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>,

      // Ex. 2: rendering custom list items
      checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
  }



  console.log(`block data: ${JSON.stringify(richText)}`)


  return (
    <main className="h-full flex py-10 flex-col overflow-hidden min-h-screen ">
      <Image
        alt='image'
        fill
        src={data.backgroundImage}
        className='object-cover opacity-90 blur-sm -z-10 '
      />

      <div className='flex flex-col  items-center'>
        <div className='flex h-min p-5 flex-col backdrop-brightness-50 rounded-md md:w-[540px] my-5 w-[326px] '>
          <h2 className='font-semibold mb-2 text-2xl'>Wedge Stamping</h2>
          <PortableText value={data.myRichTextExample} components={components} />
        </div>
        <VideoPlayer />






      </div>

    </main>
  )
}

export default page