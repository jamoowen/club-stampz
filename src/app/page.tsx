import Image from 'next/image'
import '@radix-ui/themes/styles.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">


      
      <div className='grid grid-cols-3 gap-4 w-full  rounded-md mt-20 text-white' >
        <div className='col-span-3 items-center sm:mt-10 flex justify-center '>
        <h1 className='text-3xl sm:text-5xl'>Club Stamps</h1>

        
        </div>
        <div className='col-span-3 text-xl items-center justify-center flex'>
          Coming Soon
        </div>
        
          
      </div>
    </main>
  )
}
