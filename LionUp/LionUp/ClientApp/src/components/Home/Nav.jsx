import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import "./Home.css";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" />
            Home
          </Menu.Item>
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
