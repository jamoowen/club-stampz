import Image from 'next/image'
import '@radix-ui/themes/styles.css';
import { getCarouselImages, getHomepageData } from '@/sanity/sanity-utils';
import { InferSchemaValues } from '@sanity-typed/types';
import homepageSchema from '@/sanity/schemas/homepage-schema';
import { HomePageData } from '@/types/sanity-types';
import VideoPlayer from '@/components/VideoPlayer';
import Button from '@/components/Button';
import Link from 'next/link';
import ImageCarousel from '@/components/ImageCarousel';

// import { HomePageData } from '@/sanity.config';



export default async function Home() {
  const data: HomePageData = (await getHomepageData())[0]
  const carouselImages = (await getCarouselImages())[0]
  // console.log(`images: ${carouselImages.imageUrls}`)



  return (
    <main className="h-full flex  flex-col overflow-hidden min-h-screen ">


      <div className='grid grid-cols-3  w-full  gap-1 '>

        <div className='col-span-3 items-center w-full flex justify-center '>
          <div className='  w-full flex'>
            <div className='relative bg-blend-color items-center justify-center flex flex-col  opacity  h-screen p-5 grow '>
              <Image
                alt='image'
                fill
                src={data.heroImage}
                className='object-cover opacity-90 -z-10 '
              />
              <div className=' flex h-min p-5 flex-col w-[300px] sm:w-[500px] sm:text-3xl  backdrop-brightness-50 justify-center items-center text-center text-xl '>
                {data.productText}

                <Button>
                  <Link href="/products" >
                    View Options
                  </Link>

                </Button>

              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3 items-center w-full flex justify-center '>

          <div className='relative items-center justify-center flex flex-col w-full opacity p-5'>

            <div className='flex h-min p-5 flex-col w-[300px] sm:w-[500px] sm:text-3xl backdrop-brightness-50 justify-center items-center text-center text-xl '>
              Customize your clubs with your name, initials or anything you want

            </div>
            <div className='w-9/12   m-2 flex items-center justify-center '>

              <ImageCarousel urls={carouselImages.imageUrls} />



            </div>


          </div>
        </div>

        <div className='col-span-3 items-center w-full flex justify-center '>
          <div className='  w-full flex'>
            <div className='relative bg-blend-color items-center justify-center flex flex-col  opacity  h-screen p-5 grow '>
              <Image
                alt='image'
                fill
                src={data.aboutImage}
                className='object-cover opacity-90 -z-10 '
              />
              <div className='flex h-min p-5 flex-col w-[300px] sm:w-[500px] sm:text-3xl  backdrop-brightness-50 justify-center items-center text-center text-xl '>
                {data.aboutText}

                <Button>
                  <Link href="/about" >
                    About Us
                  </Link>

                </Button>

              </div>
            </div>
          </div>
        </div>




      </div>

    </main>
  )
}
