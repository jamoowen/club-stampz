import Image from 'next/image'
import '@radix-ui/themes/styles.css';
import { getHomepageData } from '@/sanity/sanity-utils';
import { InferSchemaValues } from '@sanity-typed/types';
import homepageSchema from '@/sanity/schemas/homepage-schema';
// import { HomePageData } from '@/sanity.config';



export default async function Home() {
  const data = (await getHomepageData())[0]
  

  console.log(`data: ${JSON.stringify(data)}`)
  console.log(`type: ${data['_type']}`)
  console.log(`productText: ${data['productText']}`)
  
  return (
    <main className="flex min-h-screen flex-col items-center">


      
      <div className='grid grid-cols-3 gap-4 w-full  rounded-md mt-20 text-white' >
        <div className='col-span-3 items-center sm:mt-10 flex justify-center '>
        <h1 className='text-3xl sm:text-5xl'>Club Stamps</h1>

        
        </div>
        <div className='col-span-3 text-xl items-center justify-center flex'>
          
        </div>
        
          
      </div>
    </main>
  )
}
