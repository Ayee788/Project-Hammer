import io from "socket.io-client";
import { useState } from "react";
import Chat from "../Chat.js";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBIcon,MDBBtn,MDBTypography,MDBTextArea,MDBCardHeader,} from "mdb-react-ui-kit";


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
        <MDBContainer fluid className="App py-5 gradient-custom">
        {!showChat ? (
        <MDBCol>
            <h3>Join a Chat</h3>
            <input type="text" placeholder="Your name here" onChange={(event) => {setUsername(event.target.value);}}/>
            <input type="text" placeholder="Room number" onChange={(event) => {
                setRoom(event.target.value);
            }}/>
            <button onClick={joinRoom}>Join a Room</button>
        </MDBCol>
        ) : (
        <Chat socket={socket} username={username} room={room} />
        )}
        <Link to="/">home</Link>
        </MDBContainer>
    );
}

export default ChatView;
