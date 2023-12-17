'use client'
import { FC } from 'react'
import ReactPlayer from 'react-player'

interface VideoPlayerProps {
  
}

const VideoPlayer: FC<VideoPlayerProps> = ({}) => {
  return (
    <div className=' relative '>
        <div className=''> </div>


        <ReactPlayer
         url= "https://b2sgxnt6vjn9idgw.public.blob.vercel-storage.com/stamping.mp4" 
         playing={true}
         />

    </div>
  )
}

export default VideoPlayer

