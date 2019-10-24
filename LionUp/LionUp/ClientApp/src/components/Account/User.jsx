import React, { Component, Fragment } from "react";
import Nav from "../Nav.jsx";
import { Container } from "semantic-ui-react";
import jwt_decode from 'jwt-decode';
import axios from 'axios';


class User extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
            user: []
        };
        this.getUser = this.getUser.bind(this);
        this.getUser();
    }

    getUser = () => {
        const token = localStorage.getItem("jwt");
        const decoded = jwt_decode(token);
        const seluEmail = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];

        axios({
            method: 'POST',
            url: '/api/account/getUserByEmail',
            data: {
                seluEmail: seluEmail
            }
        })
            .then((response) => {

                console.log(response);
                this.setState({
                    user: response.data
                });
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <Fragment>
                <Nav loggedIn={this.props.loggedIn} logOut={this.props.logOut} />
                <Container className="main">
                    <div>
                        This is my profile page,
                        
                    </div>
                    <div>
                        Name: {this.state.user.firstName}
                    </div>
                    <div>
                        Email: {this.state.user.seluEmail}
                    </div>
                    <div>
                        (future sprints will include image uplaod, profile edit)
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default User;