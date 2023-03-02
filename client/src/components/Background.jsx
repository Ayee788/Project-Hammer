import React from 'react'
import videoBg from '../assets/videoBg.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>to the chatRoom</p>
    
        </div>
    </div>
  )
}

export default Main