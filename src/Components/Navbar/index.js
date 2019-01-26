import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
 
class Navbar extends Component {
  render() {
    return (
      <Menu size='huge' borderless={false} fixed={'top'} inverted >
        <Menu.Item href="" as='a' link={true}>
          Main
        </Menu.Item>
        <Menu.Item href="#about" as='a' link={true}>
          About
        </Menu.Item>
        <Menu.Item href="#services" as='a' link={true}>
          Services
        </Menu.Item>
        <Menu.Item href="#team" as='a' link={true}>
          Team
        </Menu.Item>
        <Menu.Item href="#contact" as='a' link={true}>
          Contact
        </Menu.Item>
      </Menu>
    );
  }
}
 
export default Navbar;