import { FC } from 'react'

interface BackgroundDivProps {
  children: React.ReactNode
}

const BackgroundDiv: FC<BackgroundDivProps> = ({children}) => {
  return (
    <div className='flex h-min sm:text-lg whitespace-pre-line text-sm ps-10 pe-5 py-5 flex-col backdrop-brightness-50 rounded-sm md:w-[750px] sm:w-[500px] lg:w-[900px] my-5 w-[300px] '>
        {children}
    </div>
  )
}

export default BackgroundDiv