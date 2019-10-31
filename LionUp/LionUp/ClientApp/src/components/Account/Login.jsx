import React, { Component } from "react";
import "./Account.css";
import Register from "./Register";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handledirecttoRegister = this.handledirecttoRegister.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let dataJson = {};

    for (const [key, value] of data.entries()) {
      dataJson[key] = value;
    }

    fetch("api/Account/Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataJson)
    })
      .then(response => response.json())
      .then(resData => {
        localStorage.setItem("jwt", resData.token);
        this.props.logIn();
        if (resData.token != null) {
          this.props.history.push("/home");
        } else {
            alert("Username or password is incorrect.");
            this.props.history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
        alert("Username or password is incorrect.");
      });
  }

  handledirecttoRegister() {
    this.props.history.push("./register");
  }

  render() {
   
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className="bg"></div>

          <div className="form">
            <div className="form-title">
              Login
              <div className="form-subtitle">
                Login to continue using Lion Up App.
              </div>
            </div>
            <div className="form-content">
              <input
                type="email"
                name="email"
                placeholder="firstname.lastname@selu.edu"
                required
              />
            </div>
            <div className="form-content">
              <input
                type="password"
                name="password"
                placeholder="*******"
                required
              />
            </div>
            <div className="form-btn">
              <button className="button" type="submit">
                Login
              </button>
            </div>

            <button className="button" onClick={this.handledirecttoRegister}>
              Click here to Register
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
