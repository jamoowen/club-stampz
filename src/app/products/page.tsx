import ContactForm from '@/components/ContactForm'
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
  const richText = data.customizationDetails
  // console.log(`richtext: ${JSON.stringify(richText)}`)

  const components: PortableTextComponents = {
    // hardBreak: {

    // },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal">{children}</ol>,

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
    },

    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>,
      number: ({ children }) => <li >{children}</li>,


      // Ex. 2: rendering custom list items
      // checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
  }



  return (
    <main className="h-full flex mt-5 flex-col overflow-hidden min-h-screen ">


      <div className='flex flex-col relative items-center'>
        <Image
          alt='image'
          fill
          src={data.backgroundImage}
          className='object-cover opacity-90 blur-sm -z-10 '
        />
        <div className='flex h-min sm:text-lg whitespace-pre-line text-sm ps-10 pe-5 py-5 flex-col backdrop-brightness-50 rounded-sm md:w-[750px] sm:w-[500px] lg:w-[900px] my-5 w-[326px] '>
          <h2 className='font-semibold pb-5 text-2xl'>Wedge Stamping</h2>
          <PortableText value={data.customizationDetails} components={components} />


        </div>
        <div className='flex text-black h-min sm:text-lg whitespace-pre-line text-sm ps-10 pe-5 py-5 flex-col backdrop-brightness-50 rounded-sm md:w-[750px] sm:w-[500px] lg:w-[900px] my-5 w-[326px] '>
          <ContactForm />
        </div>
        <div className=' w-full py-5 flex justify-center'>
          <VideoPlayer />
        </div>








      </div>

    </main>
  )
}

export default page