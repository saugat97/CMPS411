import React from 'react';
import UserList from "./UserList";
import './Login.css';
import app from './App.js';
import Chat from "./App";
import {ChatkitProvider} from "@pusher/chatkit-client-react";

export default function Login2(props) {
  return (
    <div className="Login">
      <h1 className="Login__title">Login as :</h1>
      <div className="Login__button" onClick={() => login('Birat', 'Zack')}>
         <b>Birat</b>
      </div>
      <div className="Login__button" onClick={() => login('Zack', 'Birat')}>
         <b>Zack</b>
      </div>
        {/*<div className="Login__button" onClick={() => login(app.chatkit.otherUserId.name)}>*/}
            {/*<b>{userId}</b>*/}
        {/*</div>*/}
        {/*<div className="Login__button" onClick={() => login(userId, otherUserId)}>*/}
        {/*    Log in as <b>Unknown</b>*/}
        {/*</div>*/}

    </div>

  );
}

function login(userId, otherUserId) {
  window.location.href = `?userId=${userId}&otherUserId=${otherUserId}`;
}
