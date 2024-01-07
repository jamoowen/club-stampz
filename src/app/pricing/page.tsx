import BackgroundDiv from '@/components/BackgroundDiv'
import { Input } from '@/components/ui/input'
import { FC } from 'react'


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import _ from 'lodash'
import PricingComponent from './PricingComponent'
import { PricingPageData } from '@/types/sanity-types'
import { getPricingPageData } from '@/sanity/sanity-utils'

interface pageProps {

}




const page: FC<pageProps> = async ({ }) => {
  // round prices to the newarest quarter¢$›
  // variables -> Initial price (for 3 characters), 
  const data: PricingPageData = (await getPricingPageData())[0]

  return (
    <main className="h-full mt-5 flex flex-col min-h-screen">
      <div className='flex justify-center'>
        <BackgroundDiv>
          <h2 className='font-semibold pb-5 text-2xl'>Our Story</h2>
          <div className='font-light'>
            {data.pricingDescription}
          </div>

          <PricingComponent data={data} />
        </BackgroundDiv>
      </div>


    </main>
  )
}

export default page