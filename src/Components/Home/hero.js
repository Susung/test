import React, { Component } from "react";
import { Segment, Button, Header } from "semantic-ui-react";

import './index.css';

class Hero extends Component {
  render() {
    return (
      <Segment style={{ padding: '0'}} vertical>
        <div class="hero-image">
          <div class="hero-text">
            <Header style={{ fontSize: '4em'}} inverted color='white'>Cassiopeia Health</Header>
            <Button href="#about">Learn more</Button>
          </div>
        </div>
      </Segment>
    );
  }
}
 
export default Hero;