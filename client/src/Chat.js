import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
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
        <div className="chat-header">
          <h1>Live Chat</h1>
        </div>
        <MDBCard className="w-100 mask-custom">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
              return (
                <div
                  className="message"
                  id={username === messageContent.author ? "you" : "other"}>
                  <div>
                    <MDBCardHeader className="d-flex justify-content-between p-3" style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                      <p className="text-light small mb-0 m-1" id="author">User: {messageContent.author}</p>
                      <p className="text-light small mb-0 m-1" id="time">{messageContent.time}</p>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <p className="text-light mb-0 m-1">{messageContent.message}</p>
                    </MDBCardBody>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </MDBCard>
        <div className="chat-footer">
          <MDBTextArea
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
          <MDBBtn color="light" size="lg" rounded className="float-end mb-3" onClick={sendMessage}>
            Send
          </MDBBtn>
          {/* <button onClick={sendMessage}>&#9658;</button> */}
        </div>
      </MDBTypography>
    </MDBCol>
  );
}

export default Chat;
