import React, { Component } from "react";
import { Container, Header, Divider, Form } from "semantic-ui-react";

class Contact extends Component {
  render() {
    return (
      <Container style={{ marginTop: '2em' }}>
        <Header as='h1'>Contact Us</Header>
        <Divider />
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Email' placeholder='Email Address' />
            <Form.Input fluid label='Name' placeholder='Full Name' />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}
 
export default Contact;