import io from "socket.io-client";
import { useState } from "react";
import Chat from "../Chat.js";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import {MDBContainer,MDBRow,div,MDBCard,MDBCardBody,MDBIcon,MDBBtn,MDBTypography,MDBTextArea,MDBCardHeader,} from "mdb-react-ui-kit";
import videoBg from '../assets/videoBg.mp4'
import ScrollToBottom from 'react-scroll-to-bottom';

const socket = io.connect("http://localhost:3000");

function ChatView() {
const [username, setUsername] = useState("");
const [room, setRoom] = useState("");
const [showChat, setShowChat] = useState(false);

const joinRoom = () => {
    if (username !== "" && room !== "") {
        socket.emit("join_room", room);
            setShowChat(true);
    }
    };

    return (
        <div className="main">
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
            {!showChat ? (
                <div>
                    <h3>Join a Chat</h3>
                    <div>
                        <label>User:</label>
                        <input className="m-2" type="text" placeholder="Your name here" onChange={(event) => {setUsername(event.target.value);}}/>
                    </div>
                    <div>
                        <label>Room:</label>
                        <input className="m-2" type="text" placeholder="Room number" onChange={(event) => {
                        setRoom(event.target.value);
                        }}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <MDBBtn color="light" size="lg" rounded className="shadow float-end" onClick={joinRoom}>Join a Room</MDBBtn>
                    </div>
                    <div className="d-flex justify-content-center" >
                        <Link className="text-white" to="/">home</Link>
                    </div>
                </div>
                ) : (
                <Chat socket={socket} username={username} room={room} />
                )}
            </div>
        </div>
    );
}

export default ChatView;
