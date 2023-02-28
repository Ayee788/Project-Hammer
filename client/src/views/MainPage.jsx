import React from 'react'
import { useState } from 'react'




const MainPage = () => {
    return (
        <div>
            <h1> Welcome to the Mustache Rodeo! Ever wonder what some of your favorite celebrities would look like with some facial hair? Now is your chance to add it and talk to your friends about it!</h1>
            <Link to="/chat">Add a new celebrity</Link>

        </div>
    )
}

export default MainPage