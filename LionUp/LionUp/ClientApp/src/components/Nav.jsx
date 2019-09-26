import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import "./Home/Home.css";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" />
          </Menu.Item>
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
              basic
              inverted
              content="Sign Out"
              style={{ width: "100%" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
export default Nav;
