import React from 'react';
import { connect } from 'react-redux';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import { Grid, Container } from 'semantic-ui-react';
import EventDetailedSidebar from './EventDetailedSidebar';
import Nav from "../../Nav"

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;

    let event = {};

    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];
    }

    return {
        event
    }
}

const EventDetailedPage = ({ event }) => {
    return (
        <div className="main-content">
            <Container className="main">
                <Nav/>

        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event.attendees} />
            </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

export default connect(mapState)(EventDetailedPage);
