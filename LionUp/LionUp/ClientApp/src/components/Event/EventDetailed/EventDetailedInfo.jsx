import React, { useState } from "react";
import { Segment, Button, Grid, Icon, Container } from "semantic-ui-react";
import EventDetailedMap from "./EventDetailedMap";

const EventDetailedInfo = ({ event }) => {
    const [isMapOpen, showMapToggle] = useState(false);
    return (
        <Segment.Group>
            <Segment attached="top">
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size="large" color="teal" name="info" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{event.description} </p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="calendar" size="large" color="teal" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>{event.date}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="marker" size="large" color="teal" />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <span>{event.venue}</span>
                    </Grid.Column>
                    <Grid.Column width={5} >
                        <Button
                            style={{width: '100%', margin:'0 0 0 0.5em'}}
                            onClick={() => showMapToggle(!isMapOpen)}
                            color="teal"
                            size="tiny"
                            content={isMapOpen ? 'Hide Map' : 'Show Map'}

                        />
                    </Grid.Column>
                </Grid>
            </Segment>
            {isMapOpen && (
                <EventDetailedMap
                    lat={event.venueLatLng.lat}
                    lng={event.venueLatLng.lng}
                />
            )}
        </Segment.Group>
    );
};

export default EventDetailedInfo;
