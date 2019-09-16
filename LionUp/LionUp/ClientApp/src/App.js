import React from 'react';
import LoginRegister from './components/Account/Login';
import Dashboard from './components/Account/Dashboard';
import NavMenu from './components/Account/NavMenu'
import Header from './components/Account/Header'
import { BrowserRouter, Switch, Route } from "react-router-dom";

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: this.checkToken(),
        };
    }

    checkToken = () => {
        const token = localStorage.getItem("jwt");
        if (token == null) {
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
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
               
                    <Route exact path="/" component={LoginRegister} />
                    <Route path="/home" component={Dashboard} />
                    
                </Switch>
            </BrowserRouter>
                
        );
    }
}

export default App;
