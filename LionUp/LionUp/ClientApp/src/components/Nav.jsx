import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import "./Home/Home.css";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.handleLogout = this.handleLogout.bind(this);
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

    render() {
        return ( 
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item header>
                        <img src="/assets/logo.png" alt="logo" />
                    </Menu.Item >

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
                        
                        {/* <Button basic inverted content="Login" /> */}
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
