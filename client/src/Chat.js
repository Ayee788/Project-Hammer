import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Link } from 'react-router-dom'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBIcon,MDBBtn,MDBTypography,MDBTextArea,MDBCardHeader,} from "mdb-react-ui-kit";

    function Chat({ socket, username, room }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <MDBCol className="App">
      <MDBTypography listUnStyled className="text-white">
        <div className="d-flex justify-content-center">
          <h1>Live Chat!</h1>
        </div>
        <MDBCard className="w-100 mask-custom">

            <div className="message-container" style={{overflow:"auto", height:"400px", overflowAnchor:"none"}}>
              {messageList.map((messageContent,i) => {
                return (
                  <div key={i}
                    className="message"
                    id={username === messageContent.author ? "you" : "other"}>
                    <div>
                      <MDBCardHeader className="d-flex justify-content-between p-3" style={{ borderBottom: "none" }}>
                        <p className="text-light small mb-0 m-1" id="author">User: {messageContent.author}</p>
                        <p className="text-light small mb-0 m-1" id="time">{messageContent.time}</p>
                      </MDBCardHeader>
                      <MDBCardBody style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                        <p className="text-light mb-1 m-1">{messageContent.message}</p>
                      </MDBCardBody>
                    </div>
                  </div>
                );
              })}
            <div style={{height:"1px",overflowAnchor:"auto"}}>

            </div>
            </div>
        </MDBCard>
        <div className="chat-footer">
          <textarea
            cols="20"
            rows="3"
            className="m-3"
            placeholder="Message"
            label="Message"
            type="text"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <MDBBtn color="light" size="lg" rounded className="shadow float-end mt-2 mb-3" onClick={sendMessage}>
            Send
          </MDBBtn>
        </div>
      </MDBTypography>
      <Link className="text-white" to="/">home</Link>
    </MDBCol>
  );
}

export default Chat;
