import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const MainPage = () => {
    return (
        <div>
            <Link to="/chat">Join a Chat</Link>
        </div>
    )
}

export default MainPage