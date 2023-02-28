import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const MainPage = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div>
            <h1> Welcome to the Mustache Rodeo! Ever wonder what some of your favorite celebrities would look like with some facial hair? Now is your chance to add it and talk to your friends about it!</h1>
            <Link to="/chat">Join a Chat</Link>
        </div>
    )
}

export default MainPage