import React, { Component } from "react";
import { Container, Divider, Grid, List, Segment, Form, Header, Icon } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '2em 0em' }}>
        <Container>
          <Grid divided inverted stackable columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Header inverted as='h3'>[LOGO]</Header>
                <Header inverted as='h6'>Follow us on :</Header>
                <Icon size='big' name='facebook' />
                <Icon size='big' name='linkedin' />
                <Icon size='big' name='twitter square' />
              </Grid.Column>
              <Grid.Column>
                <Header textAlign='center' inverted as='h3'>Join our mailing list</Header>
                <Form inverted>
                  <Form.Input placeholder='Email Address' label='Email' />
                  <Form.Input placeholder='Full Name' label='Name' />
                </Form>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <Header inverted as='h3'>Testimonials</Header>
                <br />
                "Wow this is great"
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container textAlign='center'>
          <Divider section />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}
 
export default Footer;