import React, { Fragment } from "react";
import Login from "./components/Account/Login.jsx";
import Register from "./components/Account/Register.jsx";
import Home from "./components/Home/Home";
import Event from "./components/Event/EventDashboard";
import Class from "./components/Class/Class";
import { withRouter, Route, Switch } from "react-router-dom";
import User from "./components/Account/User.jsx";
import ChatApp from "./components/Chat/ChatApp";
import EventDetailedPage from "./components/Event/EventDetailed/EventDetailedPage";
import EventForm from "./components/Event/EventForm";

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

                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path={["/createEvent", "/manage/:id"]} component={EventForm} />

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