import React, { Component, Fragment } from "react";
import Nav from "../Nav";
import Select from "react-select";
import { Grid, Button, Container, Segment, Card } from "semantic-ui-react";
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
    return (
      <Fragment>
        <Nav />
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
    );
  }
}

export default Class;
