import "../Components/Messagex.css";
import io from "socket.io-client";
import { useState } from "react";
import Messagex from "../Components/Messagex"
import Navig from "../Components/Navig";

const socket = io.connect("http://localhost:3001");

function Chat() {
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
    <>
    <Navig />
    <div className="App">
      {!showChat ? (
        <div className="roomContainer">
          <h3>JOIN A ROOM</h3>
          <input
            type="text"
            placeholder="eg. Pragati"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join Now</button>
        </div>
      ) : (
        <Messagex socket={socket} username={username} room={room} />
      )
      }
    </div>
    </>
  );
}

export default Chat;