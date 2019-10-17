import React, { Component } from "react";
import "./Account.css";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';


const Major = [
    { label: "Computer Science", value: 1 },
    { label: "Mathematics", value: 2 }
    ];

class Register extends Component {
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
