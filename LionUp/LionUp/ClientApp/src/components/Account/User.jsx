import React, { Component, Fragment } from "react";
import Nav from "../Nav.jsx";
import { Grid } from "semantic-ui-react";
import { Container, Form, Button } from "semantic-ui-react";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import "./Account.css";

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
                         <div className="title"> Profile Page</div>
                         <Grid>
                             <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={11}>
                             
                           
                            <img class="ui medium rounded image" className="user-img"
                                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" />
                            <button className="btn-edit-user button" style={{ width: '23%' }}>Edit Profile</button>
                                 <div> Name: {this.state.user.firstName}  </div>
                            <div> Email: {this.state.user.seluEmail}  </div>
                            <div> [Future sprints will include image uplaod, profile edit, etc.]  </div>
                           
                        </Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                  </Grid>
                </Container>
            </Fragment>

           
        );
    }
}

export default User;