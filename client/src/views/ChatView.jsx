import io from "socket.io-client";
import { useState } from "react";
import Chat from "../Chat.js";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBIcon,MDBBtn,MDBTypography,MDBTextArea,MDBCardHeader,} from "mdb-react-ui-kit";

//  test comment

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
        <MDBContainer fluid className="gradient-custom">
        {!showChat ? (
            <MDBCol className="App text-white">
                <h3>Join a Chat</h3>
                <div>
                    <lable>User Name:</lable>
                    <input className="m-2" type="text" placeholder="Your name here" onChange={(event) => {setUsername(event.target.value);}}/>
                </div>
                <div>
                    <lable>Room Number:</lable>
                    <input className="m-2" type="text" placeholder="Room number" onChange={(event) => {
                    setRoom(event.target.value);
                    }}/>
                </div>
                <MDBBtn color="light" size="lg" rounded className="shadow float-end" onClick={joinRoom}>Join a Room</MDBBtn>
            </MDBCol>
            ) : (
            <Chat socket={socket} username={username} room={room} />
            )}
            <Link className="text-white" to="/">home</Link>
        </MDBContainer>
    );
}

export default ChatView;
