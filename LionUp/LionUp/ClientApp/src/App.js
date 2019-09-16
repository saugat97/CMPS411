import React from "react";
import Login from "./components/Account/Login.jsx";
import Home from "./components/Home/Home";
import Event from "./components/Event/Event";
import Class from "./components/Class/Class";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: this.checkToken()
    };
  }

  checkToken = () => {
    const token = localStorage.getItem("jwt");
    if (token == null) {
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/event" component={Event} />
          <Route path="/class" component={Class} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
