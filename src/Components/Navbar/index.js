import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
 
class Navbar extends Component {
  render() {
    return (
      <Menu size='huge' borderless={false} fixed={'top'} inverted >
        <Container>
          <Menu.Item href="" as='a' link={true}>
            [LOGO HERE]
          </Menu.Item>
          <Menu.Item href="" as='a' link={true} position='right'>
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
        </Container>
      </Menu>
    );
  }
}
 
export default Navbar;