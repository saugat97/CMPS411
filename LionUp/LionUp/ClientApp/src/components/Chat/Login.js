import React, { Component,Fragment } from 'react';
import UserList from "./UserList";
import './Login.css';
//import app from './ChatApp.js';
//import Chat from "../ChatApp.js";
import { ChatkitProvider } from "@pusher/chatkit-client-react";
import Nav from "../Nav";

export default function Login(props) {
    return (
        <div className="main-content">
        <Fragment>
    <div className="Login">
      <h1 className="Login__title">Send Message to :</h1>
      <div className="Login__button" onClick={() => login('Saugat', 'Birat')}>
         <b>Birat</b>
      </div>
      <div className="Login__button" onClick={() => login('Saugat', 'Zack')}>
         <b>Zack</b>
      </div>
        {/*<div className="Login__button" onClick={() => login(app.chatkit.otherUserId.name)}>*/}
            {/*<b>{userId}</b>*/}
        {/*</div>*/}
        {/*<div className="Login__button" onClick={() => login(userId, otherUserId)}>*/}
        {/*    Log in as <b>Unknown</b>*/}
        {/*</div>*/}

            </div>
            </Fragment>
        </div>
  );
}

function login(userId, otherUserId) {
  window.location.href = `Chat/?userId=${userId}&otherUserId=${otherUserId}`;
}
