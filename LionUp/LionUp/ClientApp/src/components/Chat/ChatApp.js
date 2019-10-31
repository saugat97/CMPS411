import React, {Component, Fragment } from 'react';
import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';
import { Grid, Container } from "semantic-ui-react";
import './ChatApp.css';
import Chat from './Chat';
import UserList from './UserList';
import Login from './Login';
import Nav from "../Nav";


const instanceLocator = 'v1:us1:bef839d2-e5a5-43d4-a7e0-6e96ea8bf00b';


const tokenProvider = new TokenProvider({
    url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/bef839d2-e5a5-43d4-a7e0-6e96ea8bf00b/token',
})


class ChatApp extends Component {
    render() {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');
        const otherUserId = urlParams.get('otherUserId');

        return (
            <div className="main-content">
                <Fragment>
                    <Nav loggedIn={this.props.loggedIn} logOut={this.props.logOut} />
                    <Container className="main">

                    {userId && otherUserId ? (

                        <div className="App__chatwindow">
                            <ChatkitProvider
                                instanceLocator={instanceLocator}
                                tokenProvider={tokenProvider}
                                userId={userId}
                            >
                                <UserList userId={userId} />
                                <Chat otherUserId={otherUserId} />
                            </ChatkitProvider>
                        </div>

                    ) : (
                            <Login />
                        )}

                   
                    </Container>
                </Fragment>
            </div>
        );
    }
}    
 export default ChatApp;
