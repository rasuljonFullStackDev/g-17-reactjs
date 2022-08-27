import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'

const Player = () => {
    const ref = useRef()
    console.log(ref);
    useEffect(()=>{
        console.log(ref);
    },[ref])
    const [plays,setPlays] = useState(false);
    const play = () =>{
        console.log('ref',ref);
        console.log('current',ref.current);
        setPlays(!plays)
        if(plays){
            ref.current.play()
        }else{
            ref.current.pause()
        }
        ref.current.style.width = '1000px'
        ref.current.classList.add('video')
    }
  return (
    <div>
        <h1 >useRef</h1>
        <button className='btn' onClick={play}>play</button>
        <video src="./video/video.mp4" ref={ref}  width={400} height={400}></video>
    </div>
  )
}

export default Player