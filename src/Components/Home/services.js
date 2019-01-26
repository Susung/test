import React, { Component } from "react";
import { Container, Header, Divider, Step, Segment } from "semantic-ui-react";

class Services extends Component {
  render() {
    return (
      <Container style={{ marginTop: '2em' }}>
        <Header as='h1'>Services</Header>
        <Divider />
        <Step.Group attached='top'>
          <Step>
            <Step.Content>
              <Step.Title>Step 1</Step.Title>
              <Step.Description>Step 1 description</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content>
              <Step.Title>Step 2</Step.Title>
              <Step.Description>Step 2 description</Step.Description>
            </Step.Content>
          </Step>

          <Step>
            <Step.Content>
              <Step.Title>Step 3</Step.Title>
              <Step.Description>Step 3 description</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>

        <Segment attached>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis est sed velit consectetur euismod in eu sem. Aenean in eros sit amet est feugiat hendrerit vitae vitae velit. Phasellus non orci venenatis urna eleifend convallis quis vel est. Ut vestibulum purus et nisi venenatis volutpat. Sed venenatis ante id ante suscipit pretium. Mauris lacinia libero eu quam dictum, pellentesque ultrices nisi lacinia. Etiam fermentum magna convallis, condimentum odio vitae, tempus libero. Maecenas facilisis malesuada mattis. Fusce iaculis eu ex malesuada cursus. Nullam sed faucibus enim, quis sagittis metus. Ut consectetur venenatis felis, vitae malesuada nulla.
        </Segment>
      </Container>
    );
  }
}
 
export default Services;