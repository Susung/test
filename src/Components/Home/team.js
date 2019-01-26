import React, { Component } from "react";
import { Container, Header, Divider, Card } from "semantic-ui-react";

import avatar from'../../Images/img_avatar.png';


class Team extends Component {
  
  render() {
    const items = [
      {
        header: 'Leader',
        image: avatar,
        description: 'CAPTION',
        meta: 'Important person',
      },
      {
        header: 'Slave',
        image: avatar,
        description: 'CAPTION',
        meta: 'Does slave work',
      },
      {
        header: 'Member',
        image: avatar,
        description: 'CAPTION',
        meta: 'Just a member',
      },
    ]
    
    const CardExampleGroupProps = () => <Card.Group centered items={items} />

    return (
      <Container style={{ marginTop: '2em' }}>
        <Header as='h1'>Team</Header>
        <Divider />
        <CardExampleGroupProps />
      </Container>
    );
  }
}
 
export default Team;