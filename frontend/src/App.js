import Chat from "./chat/chat";
import Process from "./process/process";
import Home from "./home/home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {BrowserRouter as Router , Routes ,Route ,useParams} from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";

const socket = io.connect('/');
function Appmain(props) {
  let {username,roomname} = useParams();
  console.log(username)
  console.log(roomname)

  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={username}
          roomname={roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Process />
      </div>
    </React.Fragment>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element ={<Home socket={socket}/>} exact>
            {/* <Home socket={socket} /> */}
          </Route>
          <Route path="/chat/:roomname/:username" element={<Appmain />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
