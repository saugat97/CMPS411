import React, { Component, Fragment } from "react";
import Nav from "../Nav";
import Select from "react-select";
import { Grid, Container } from "semantic-ui-react";
import "./class.css";

const Major = [
    { label: "CMPS 161", value: 1 },
    { label: "CMPS 285", value: 2 },
    { label: "CMPS 390", value: 3 },
    { label: "CMPS 401", value: 4 },
    { label: "CMPS 411", value: 5 }
];

class Class extends Component {
    render() {
        debugger
        if (this.props.loggedIn === false) {
            alert("Unauthorized: You need to log in first!");
            this.props.history.push('/');
        }

        return (
            <div className="main-content">
                <Fragment>
                    <Nav loggedIn={this.props.loggedIn} logOut={this.props.logOut} />
                    <Container className="main">
                        <Grid>
                            <Grid.Column width={3}></Grid.Column>
                            <Grid.Column width={9}>
                                <p>Please select the class to join the discussion thread</p>
                                <div className="form-major">
                                    <Select className="select" options={Major} />
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}></Grid.Column>
                        </Grid>
                    </Container>
                </Fragment>
            </div>
        );
    }
}


export default Class;
