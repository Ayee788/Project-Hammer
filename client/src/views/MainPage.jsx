import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBIcon,MDBBtn,MDBTypography,MDBTextArea,MDBCardHeader,} from "mdb-react-ui-kit";


const MainPage = () => {
    return (
        <MDBContainer fluid className="App py-5 gradient-custom">
            <h1 class="m-4 p-1"> Welcome to the Mustache Rodeo! Ever wonder what some of your favorite celebrities would look like with some facial hair? Now is your chance to add it and talk to your friends about it!</h1>
            <Link to="/chat">Join a Chat</Link>
        </MDBContainer>
    )
}

export default MainPage