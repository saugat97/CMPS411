import React, { Fragment } from "react";
import Login from "./components/Account/Login.jsx";
import Home from "./components/Home/Home";
import Event from "./components/Event/EventDashboard";
import Class from "./components/Class/Class";
import { withRouter, Route } from "react-router-dom";

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
        }
        else {
            return true;
        }
    }

    updateState() {
        this.setState({
            loggedIn: this.checkToken()
        });
    }

   

  render() {
    return (
        <Fragment>
                <Route
                    exact path='/'
                    render={(routeProps) => (
                        <Login {...routeProps}
                            logIn={() => this.updateState()}
                            loggedIn={this.state.loggedIn}
                        />
                    )}
                />

                <Route
                    path='/home'
                    render={(routeProps) => (
                        <Home {...routeProps}
                            loggedIn={this.state.loggedIn}
                            logOut={() => this.updateState()} />

                    )}
                />

                <Route
                    path='/event'
                    render={(routeProps) => (
                        <Event {...routeProps}
                            loggedIn={this.state.loggedIn}
                            logOut={() => this.updateState()}

                        />
                    )}
                />
                <Route
                    path='/class'
                    render={(routeProps) => (
                        <Class {...routeProps}
                            loggedIn={this.state.loggedIn}
                            logOut={() => this.updateState()} />
                    )}
            />
        </Fragment>
    );
  }
}

export default withRouter(App);
