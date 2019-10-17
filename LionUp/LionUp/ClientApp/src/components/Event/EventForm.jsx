import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  render() {
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input name="title" placeholder="Event Title" />
          </Form.Field>

          <Form.Field>
            <label>Event Start Date and Time</label>
            <input name="dateTime" placeholder="Event Start Date and Time" />
          </Form.Field>

          <Form.Field>
            <label>Event End Date and Time</label>
            <input name="dateTime" placeholder="Event End Date and Time" />
          </Form.Field>

          <Form.Field>
            <label>Location</label>
            <input name="location" placeholder="Location" />
          </Form.Field>

          <Form.Field>
            <label>Hosted By</label>
            <input name="hostedBy" placeholder="Hosted By" />
          </Form.Field>
          <Button positive type="submit">
              Submit
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
