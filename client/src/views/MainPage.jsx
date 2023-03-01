import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const MainPage = () => {
    return (
        <div className="App">
            <h1 className="m-4 p-1"> Welcome to the chatroom! </h1>
            <Link to="/chat">Join a Chat</Link>
        </div>
    )
}

export default MainPage