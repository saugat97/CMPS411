/*global google*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { combineValidators, isRequired } from 'revalidate';
// import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import { Segment, Form, Button, Grid, Header, Container } from "semantic-ui-react";
import { createEvent, updateEvent } from "./eventActions";
import cuid from "cuid";
import TextInput from "../../common/form/TextInput";
import TextArea from "../../common/form/TextArea";
import SelectInput from "../../common/form/SelectInput";
import DateInput from "../../common/form/DateInput";
import PlaceInput from "../../common/form/PlaceInput";
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Nav from "../Nav"

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;

    let event = {};

    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];
    }

    return {
        initialValues: event
    };
};

const actions = {
    createEvent,
    updateEvent
};

const validate = combineValidators({
    title: isRequired({ message: 'The event title is required' }),
    category: isRequired({ message: 'The category is required' }),

    city: isRequired('city'),
    venue: isRequired('venue'),
    date: isRequired('date')
})

const category = [
    { key: "festival", text: "Festival", value: "festival" },
    { key: "meeting", text: "Meeting", value: "meeting" },
    { key: "cab", text: "Campus Activities", value: "cab" },
    { key: "soccer", text: "Athletics", value: "soccer" },
    { key: "university", text: "University", value: "university" },
    { key: "training", text: "Training", value: "training" },
    { key: "celebrate", text: "Celebrate", value: "celebrate" },
    { key: "fun", text: "Fun and Games", value: "fun" }
];

class EventForm extends Component {
    state = {
        cityLatLng: {},
        venueLatLng: {}
    }

    onFormSubmit = values => {
        values.venueLatLng = this.state.venueLatLng;
        if (this.props.initialValues.id) {
            this.props.updateEvent(values);
            this.props.history.push(`/events/${this.props.initialValues.id}`);
        } else {
            const newEvent = {
                ...values,
                id: cuid(),
                hostPhotoURL: "/assets/user.png"
            };
            this.props.createEvent(newEvent);
            this.props.history.push(`/events/${newEvent.id}`);
        }

    };

    handleCitySelect = selectedCity => {
        geocodeByAddress(selectedCity)
            .then(results => getLatLng(results[0]))
            .then(latlng => {
                this.setState({
                    cityLatLng: latlng
                })
            })
            .then(() => {
                this.props.change('city', selectedCity)
            })
    }

    handleVenueSelect = selectedVenue => {
        geocodeByAddress(selectedVenue)
            .then(results => getLatLng(results[0]))
            .then(latlng => {
                this.setState({
                    venueLatLng: latlng
                })
            })
            .then(() => {
                this.props.change('venue', selectedVenue)
            })
    }

    render() {
        const { history, initialValues, invalid, submitting, pristine } = this.props;
        return (
            <div className="main-content">
                <Container className="main">
                    <Nav />
                    <Grid>
                        <Grid.Column width={13}>
                            <Segment>
                                <Header sub color="teal" content="Event Details" />
                                <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete="off">
                                    <Field
                                        name="title"
                                        component={TextInput}
                                        options={category}
                                        placeholder="Give your event a name"
                                    />
                                    <Field
                                        name="category"
                                        component={SelectInput}
                                        options={category}
                                        multiple={true}
                                        placeholder="What is your event about?"
                                    />
                                    <Field
                                        name="description"
                                        component={TextArea}
                                        rows={3}
                                        placeholder="Tell us about your event"
                                    />

                                    <Header sub color="teal" content="Event Location Details" />
                                    <Field
                                        name="city"
                                        component={PlaceInput}
                                        options={{
                                            types: ['(cities)']
                                        }}
                                        onSelect={this.handleCitySelect}
                                        placeholder="Event City"
                                    />
                                    <Field
                                        name="venue"
                                        component={PlaceInput}
                                        options={{
                                            location: new google.maps.LatLng(this.state.cityLatLng),
                                            radius: 1000,
                                            types: ['establishment']
                                        }}
                                        onSelect={this.handleVenueSelect}
                                        placeholder="Event Venue"
                                    />
                                    <Field
                                        name="date"
                                        component={DateInput}
                                        dateFormat='dd LLL yyyy h:mm a'
                                        showTimeSelect
                                        timeFormat='HH:mm'
                                        placeholder="Event Date"
                                    />

                                    <Button style={{

                                        backgroundColor: 'rgb(0, 102, 51)'
                                    }} disabled={invalid || submitting || pristine} positive type="submit">
                                        Submit
                                    </Button>
                                    <Button
                                        onClick={initialValues.id
                                            ? () => history.push(`/events/${initialValues.id}`)
                                            : () => history.push(`/event`)
                                        }
                                        type="button">
                                        Cancel
                                        </Button>
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container >
            </div >
        );
    }
}

export default connect(
    mapState,
    actions
)(reduxForm({ form: "eventForm", validate })(EventForm));
