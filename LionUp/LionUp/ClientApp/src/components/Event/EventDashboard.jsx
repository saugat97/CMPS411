import React, { Component } from "react";
import { Grid, Container, Button } from "semantic-ui-react";
import "./Event.css";
import EventList from "./EventList";
import { connect } from 'react-redux'
import { Link} from "react-router-dom";
import { createEvent, updateEvent, deleteEvent } from "./eventActions"
import Nav from "../Nav"

const mapState = (state) => ({
    events: state.events
})

const actions = {
    createEvent,
    updateEvent,
    deleteEvent
}

class EventDashboard extends Component {
    handleDeleteEvent = (id) => {
        this.props.deleteEvent(id);
    };



    render() {
        if (this.props.loggedIn === false) {

            this.props.history.push('/');
        }
        const { events } = this.props;
        return (
            <div className="main-content">
                <Container className="main">
                    <Nav loggedIn={this.props.loggedIn} logOut={this.props.logOut} />
                    <Grid>
                        <Grid.Column width={10}>
                            <EventList
                                events={events}
                                deleteEvent={this.handleDeleteEvent}
                            />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            
                            <Button
                                style={{
                                    width: '50%',
                                    backgroundColor: 'rgb(0, 102, 51)'
                                }}
                                as={Link}
                                to="/createEvent"
                                floated="center"
                                positive
                                inverted
                                content="Create Event"
                            />
                            <b/>
                            
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}
export default connect(mapState, actions)(EventDashboard);
