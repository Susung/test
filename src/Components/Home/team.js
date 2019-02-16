import React, { Component } from "react";
import { Container, Header, Divider, Card } from "semantic-ui-react";

import avatar from'../../Images/img_avatar.png';


class Team extends Component {
  
  render() {
    const items = [
      {
        header: 'JaeMoo Lee',
        image: avatar,
        description: 'CAPTION',
        meta: 'Ok person',
      },
      {
        header: 'Susung Choi',
        image: avatar,
        description: 'CAPTION',
        meta: 'VVIP',
      }
    ]

    const board = [
      {
        header: 'Bill Gates',
        image: avatar,
        description: 'CAPTION',
        meta: '',
      },
      {
        header: 'Tim Cook',
        image: avatar,
        description: 'CAPTION',
        meta: '',
      }
    ]
    
    const CardExampleGroupProps = () => <Card.Group centered items={items} />
    const BoardProps = () => <Card.Group centered items={board} />


    return (
      <div>
        <Container style={{ marginTop: '2em' }}>
          <Header as='h1'>Your Advocates</Header>
          <Divider />
          <CardExampleGroupProps />
        </Container>
        <Container style={{ marginTop: '4em' }}>
          <Header as='h1'>Board Members</Header>
          <Divider />
          <BoardProps />    
        </Container>
      </div>
    );
  }
}
 
export default Team;