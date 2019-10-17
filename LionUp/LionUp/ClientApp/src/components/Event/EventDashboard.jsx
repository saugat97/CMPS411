/// <reference path="../home/home.jsx" />
import React, { Component } from "react";
import Nav from "../Nav";
import { Grid, GridColumn, Container, Button } from "semantic-ui-react";
import EventForm from "./EventForm";
import "./Event.css";
import EventList from "./EventList";

const eventsFromDashboard = [
  {
    id: "1",
    title: "Women in Technology General Meeting",
    date: "2019-09-30",
    category: "Wit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Hammond, LA",
    venue: "Fayard 123",
    hostedBy: "WIT",
    hostPhotoURL: "https://randomuser.me/api/portraits/women/26.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "c",
        name: "Harry",
        photoURL: "https://randomuser.me/api/portraits/women/22.jpg"
      },
      {
        id: "d",
        name: "Harry",
        photoURL: "https://randomuser.me/api/portraits/women/20.jpg"
      },
      {
        id: "e",
        name: "Harry",
        photoURL: "https://randomuser.me/api/portraits/women/26.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Homecoming Week",
    date: "2019-10-07",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Hammond, LA",
    venue: "Southeastern Louisiana University",
    hostedBy: "SoutheasternCAB",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/10.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/women/26.jpg"
      }
    ]
  },
  {
    id: "3",
    title: "Southeastern art lecture to feature Kim Howes Zabbia",
    date: "2019-09-25",
    category: "department",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Hammond, LA",
    venue: "Visual Art + Design Building",
    hostedBy: "Department of Visual Arts+Design",
    hostPhotoURL: "https://randomuser.me/api/portraits/women/26.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "4",
    title: "Career Fair 2019",
    date: "2019-09-19",
    category: "Profession",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Hammond, LA",
    venue: "Pennington Center",
    hostedBy: "Career Services",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/16.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/women/26.jpg"
      }
    ]
  },
  
];

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: true,
    selectedEvent: null
  };

  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleDeleteEvent = id => {
    this.setState(({ events }) => ({
      events: events.filter(e => e.id !== id)
    }));
  };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

    render() {
        if (this.props.loggedIn === false) {
            alert("Unauthorized: You need to log in first!");
            this.props.history.push('/');
        }
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Container className="main">
        <Nav loggedIn={this.props.loggedIn} logOut={this.props.logOut} />
        <Grid>
          <GridColumn width={10}>
            <EventList
              events={events}
              selectEvent={this.handleSelectEvent}
              deleteEvent={this.handleDeleteEvent}
            />
          </GridColumn>
          <GridColumn width={6}>
            <Button
              onClick={this.handleCreateFormOpen}
              positive
              content="Create Event"
            />

            <EventForm />
          </GridColumn>
        </Grid>
      </Container>
    );
  }
}
export default EventDashboard;
