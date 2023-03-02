import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBIcon,MDBBtn,MDBTypography,MDBTextArea,MDBCardHeader,} from "mdb-react-ui-kit";


const MainPage = () => {
    return (
        <MDBContainer fluid className="Appa py-5 gradient-custom text-white">
            <h1 className="m-4 p-1"> Join Our Chatroom!</h1>
            <Link className="text-white" to="/chat">Join a Chat</Link>
        </MDBContainer>
    )
}

export default MainPage