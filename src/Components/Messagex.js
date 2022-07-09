import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Messagex.css";
import io from "socket.io-client";

const Messagex = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageInfo, setMessageInfo] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        person: username,
        room: room,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageInfo((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on('receive_message', data => {
      setMessageInfo([...messageInfo, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Send a Quick Message</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageInfo.map((messageContent) => {
            return (
              <div
                className="message"
                id= {username === messageContent.person ? "ok" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="person">{messageContent.person}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Say Hii..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Messagex;