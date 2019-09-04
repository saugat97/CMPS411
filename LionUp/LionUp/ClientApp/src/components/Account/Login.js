import React, { Component } from "react";
import "./Account.css";
import Register from "./Register";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
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
                        <input type="text" placeholder="firstname.lastname@selu.edu" />
                    </div>
                    <div className="form-content">
                        <input type="text" placeholder="*******" />
                    </div>
                    <div className="form-btn">
                        <button className="button" type="submit">
                            Login
            </button>
                    </div>

                    <button
                        className="button-register"
                        onClick={this.togglePopup.bind(this)}
                    >
                        {" "}
                        Click here to Register ->
          </button>
                    {this.state.showPopup ? (
                        <Register closePopup={this.togglePopup.bind(this)} />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Login;
