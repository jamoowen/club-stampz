'use client'
import { FC, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import Button from './Button'

interface VideoPlayerProps {

}

const VideoPlayer: FC<VideoPlayerProps> = ({ }) => {
  const [play, setPlay] = useState(false)

  const handlePlay = () => {
    console.log(`Play: ${play}`)
    setPlay(!play);

  }
  return (
    <div onClick={handlePlay} className='cursor-pointer relative  '>
    

      <div className='pointer-events-none rounded-sm bg-black p-1 md:w-[540px] w-[326px]'>
        <ReactPlayer
          url="https://youtu.be/4njYQzglF_g"
          playing={play}
          muted={false}
          playIcon={<Button className='z-30' onClick={() => setPlay(!play)}> PLAYMEEEEEE</Button>}
          width='auto'

       

    

        />
      </div>


    </div>
  )
}

export default VideoPlayer

