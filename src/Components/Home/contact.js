import React, { Component } from "react";
import { Container, Grid, Header, Divider, Form } from "semantic-ui-react";

class Contact extends Component {
  render() {
    return (
      <Container style={{ marginTop: '2em' }}>
        <Header as='h1'>Contact Us</Header>
        <Divider /><br />
        <center>
          <Header as='h3'>Ready to navigate your medical finance with us?</Header>
          Send us a message and we will keep in touch
        </center><br />
        <Grid columns='equal' stackable>
          <Grid.Row divided stackable>
            <Grid.Column width={6}>
              <Form>
                <Form.Input placeholder='Email Address' label='Email' />
                <Form.Input placeholder='Full Name' label='Name' />
                <Form.Input placeholder='Phone Number' label='Phone Number' />
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Input placeholder='Subject' label='Subject' />
                <Form.TextArea style={{ minHeight: '8.5em' }} label='About' placeholder='Tell us more about you...' />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Form.Button>Submit</Form.Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

    );
  }
}
 
export default Contact;