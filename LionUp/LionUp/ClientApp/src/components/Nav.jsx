import React, { Component } from "react";
import { Menu, Container, Button, Dropdown } from "semantic-ui-react";
import "./Home/Home.css";
import { NavLink } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            user: []
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUser();
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleLogout() {
        localStorage.removeItem("jwt");
        this.props.logOut();
        //if (this.props.logOut === true) {
        //    this.props.history.push('/');
        //}
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
            <Menu inverted fixed="top">
                <Container>
                    <NavLink to="/home" exact >
                    <Menu.Item header>
                        <img src="/assets/logo.png" alt="logo" /> 
                    </Menu.Item >
                    </NavLink>
                    <NavLink to="/home" exact>
                        <Menu.Item name="Home" />
                    </NavLink>

                    <NavLink to="/event" exact>
                        <Menu.Item name="Events" />
                    </NavLink>


                    <NavLink to="/class" exact>
                        <Menu.Item name="Classes" />
                    </NavLink>

                    <Menu.Item position="right">
                        <NavLink to="/profile" exact>
                            <Menu.Item content={this.state.user.seluEmail} />
                        </NavLink>
                                    <Button
                                    onClick={this.handleLogout}
                                    basic
                                    inverted
                                    content="Log Out"
                                    style={{ width: "100%" }}
                                    />
                                    
                                           </Menu.Item>
                </Container>
            </Menu>
        );
    }
}
export default Nav;
