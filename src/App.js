import React from "react";
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import Mainpage from "./Components/Mainpage";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Privacy from "../src/Pages/Privacy";
import VideoBar from "./Messenger/VideoBar";
import { Routes, Route } from 'react-router-dom'; 
import './App.css';

const App = () => {
  
  return(
    <> 
    <nav className="navbar">
    <Routes>
      <Route exact path="/" element = {<Mainpage />} />
      <Route path="/Login" element = {<Login />} />
      <Route path="/Signup" element = {<Signup />} />
      <Route path="/Chat" element = {<Chat />} />
      <Route path="/Home" element = {<Home />} />
      <Route path="/Privacy" element = {<Privacy />} />
      <Route path="/Videochat" element = {<VideoBar />} />
    </Routes> 
    </nav>
    </>
  );
}

export default App;
