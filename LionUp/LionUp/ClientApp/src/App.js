import React, { Fragment } from "react";
import Login from "./components/Account/Login.jsx";
import Register from "./components/Account/Register.jsx";
import Home from "./components/Home/Home";
import Event from "./components/Event/EventDashboard";
import Class from "./components/Class/Class";
import { withRouter, Route } from "react-router-dom";
import User from "./components/Account/User.jsx";
import ChatApp from "./components/Chat/ChatApp"

import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';

import './App.css';
import Chat from './Chat';
import UserList from './UserList';
import Login2 from './Login';

const instanceLocator = 'v1:us1:bef839d2-e5a5-43d4-a7e0-6e96ea8bf00b';


const tokenProvider = new TokenProvider({
    url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/bef839d2-e5a5-43d4-a7e0-6e96ea8bf00b/token',
})


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: this.checkToken()
        };

        this.updateState = this.updateState.bind(this);
    }



    checkToken = () => {
        const token = localStorage.getItem("jwt");
        if (token == null || token === undefined) {
            return false;
        } else {
            return true;
        }
    };

    updateState() {
        this.setState({
            loggedIn: this.checkToken()
        });
    }

    render() {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');
        const otherUserId = urlParams.get('otherUserId');
        return (

            <Fragment>

              
                <Route
                    exact
                    path="/"
                    render={routeProps => (
                        <Login
                            {...routeProps}
                            logIn={() => this.updateState()}
                            loggedIn={this.state.loggedIn}
                        />
                    )}
                />

                <Route
                    path="/register"
                    render={routeProps => <Register {...routeProps} />}
                />

                <Route
                    path="/home"
                    render={routeProps => (
                        <Home
                            {...routeProps}
                            loggedIn={this.state.loggedIn}
                            logOut={() => this.updateState()}
                        />
                    )}
                />

                <Route
                    path="/profile"
                    render={routeProps => (
                        <User
                            {...routeProps}
                            loggedIn={this.state.loggedIn}
                            logOut={() => this.updateState()}
                        />
                    )}
                />


                <Route
                    path="/event"
                    render={routeProps => (
                        <Event
                            {...routeProps}
                            loggedIn={this.state.loggedIn}
                            logOut={() => this.updateState()}
                        />
                    )}
                />

                <Route
                    path="/Chat"
                    render={routeProps => (
                        <ChatApp
                            {...routeProps}
                            loggedIn={this.state.loggedIn}
                            logOut={() => this.updateState()}
                        />
                    )}
                />

                <Route
                    path="/class"
                    render={routeProps => (
                        <Class
                            {...routeProps}
                            loggedIn={this.state.loggedIn}
                            logOut={() => this.updateState()}
                        />
                    )}
                />
            </Fragment>
        );
    }
}

export default withRouter(App);