import React, { Component } from "react";
import "./Account.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

const Major = [
    { label: "Computer Science", value: 1 },
    { label: "Mathematics", value: 2 }
];

class Register extends Component {
    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
        this.handleredirecttoLogin = this.handleredirecttoLogin.bind(this);
    }

    handleRegister(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        let dataJson = {};

        for (const [key, value] of data.entries()) {
            dataJson[key] = value;
        }

        fetch('api/Account/Register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJson)
        }).then(res => {
            return res.json();
        }).then(res => {
            alert("Account successfully created!.");
            this.handleredirecttoLogin();
        }).catch(error => console.log(error));
    }


    handleredirecttoLogin() {
        this.props.history.push('./');
    };

    render() {
        return (
            <div>
                <div className="bg">></div>

                <form onSubmit={this.handleRegister}>
                    <div className="popup">
                        <div className="popup\_inner modal-contents">
                            <div align="center">
                                <div className="form-register">Register</div>
                                <div className="form-model">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-model">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-model">
                                    <input
                                        type="text"
                                        placeholder="firstname.lastname@selu.edu"
                                        name="seluEmail"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-model">
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-model">
                                    <Select className="select" options={Major} />
                                </div>
                                <button type="submit" className="button">
                                    Register
                                </button>
                                <button
                                    className="button"
                                    onClick={this.handleredirecttoLogin}
                                >
                                    Back to Login
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
