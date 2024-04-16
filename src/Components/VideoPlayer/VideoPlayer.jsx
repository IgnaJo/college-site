import React, { useRef } from 'react'
import './VideoPlayer.css'
import video_taylor from '../../assets/videoTaylor.mp4'
const VideoPlayer = ({playState,setPlayState}) => {
    //const linkVideo = 'https://www.youtube.com/watch?v=wjSER73EAcU'

    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video_taylor} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
