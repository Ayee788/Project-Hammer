import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBIcon,MDBBtn,MDBTypography,MDBTextArea,MDBCardHeader,} from "mdb-react-ui-kit";
import videoBg from '../assets/videoBg.mp4'


const MainPage = () => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <h1 className="m-4 p-1"> Join Our Chatroom!</h1>
                <Link className="text-white" to="/chat">Join a Chat</Link>
            </div>
        </div>
    )
}

export default MainPage