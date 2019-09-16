import React, { Component } from "react";
import "./Account.css";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';


const Major = [
    { label: "Computer Science", value: 1 },
    { label: "Mathematics", value: 2 }
    ];

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    submitRegistrationForm(e) {
        e.preventDefault();
        
        this.handleRegister(e);
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
                'Content-Type':'application/json'
            },
            body: JSON.stringify(dataJson)
        }).then(res => {
            return res.json();
            
        })
        alert("Account created successfully");
    }

    render() {
        return (
            <form onSubmit={this.submitRegistrationForm}>
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
                        <button type="submit" className="button" >
                            Register
            </button>
                        <button className="button button-cancel" onClick={this.props.closePopup}>
                            Cancel
            </button>
                    </div>
                </div>
                </div>
                </form>

        );
    }
}

export default Register;
