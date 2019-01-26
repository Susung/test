import React, { Component } from "react";
import { Segment, Container, Image } from "semantic-ui-react";

import mainLogo from'../../Images/hero.jpg';

class Hero extends Component {
  render() {
    return (
      <Segment style={{ padding: '0'}} vertical>
        <Container>
          <Image src={mainLogo} fluid />
        </Container>
      </Segment>
    );
  }
}
 
export default Hero;