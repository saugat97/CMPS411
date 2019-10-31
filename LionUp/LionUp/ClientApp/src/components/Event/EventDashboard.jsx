import React, { Component } from "react";
import Nav from "../Nav";
import { Grid, GridColumn, Container, Button } from "semantic-ui-react";
import EventForm from "./EventForm";
import "./Event.css";
import EventList from "./EventList";
import jwt_decode from 'jwt-decode';
import cuid from "cuid";

const eventsFromDashboard = [

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
        hostPhotoURL: "../../../assets/user.png",
        attendees: [
            {
                id: "a",
                name: "Bob",
                photoURL: "../../../assets/user.png"
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
        hostPhotoURL: "../../../assets/user.png",
        attendees: [
            {
                id: "b",
                name: "Tom",
                photoURL: "../../../assets/user.png"
            }
        ]
    }

];

class EventDashboard extends Component {
    state = {
        events: eventsFromDashboard,
        isOpen: true,
        selectedEvent: null
    };

    handleCreateEvent = newEvent => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = "../../../assets/user.png"
        //newEvent.hostPhotoURL = 
        this.setState(({ events }) => ({
            events: [...events, newEvent],
            isOpen: false
        }));
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

    handleUpdateEvent = updatedEvent => {
        this.setState(({ events }) => ({
            events: events.map(event => {
                if (event.id === updatedEvent.id) {
                    return { ...updatedEvent };

                }
                else {
                    return event;
                }
            }),
            isOpen: false,
            selectedEvent: null
        }));
    };



    render() {
        if (this.props.loggedIn === false) {

            this.props.history.push('/');
        }
        const { events, isOpen, selectedEvent } = this.state;
        return (
            <div className="main-content">
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
                        {isOpen && (
                            <EventForm
                                    key={selectedEvent ? selectedEvent.id : 0}
                                    updatedEvent={this.handleUpdateEvent}
                                selectedEvent={selectedEvent}
                                createEvent={this.handleCreateEvent}
                                cancelForm={this.handleFormCancel}
                            />
                        )}

                    </GridColumn>
                </Grid>
                </Container>
                </div>
        );
    }
}
export default EventDashboard;
