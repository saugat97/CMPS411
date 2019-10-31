import React, { Component, Fragment } from "react";
import Nav from "../Nav";
import Select from "react-select";
import { Grid, Container } from "semantic-ui-react";
import "./class.css";


const CS1 = [
  { label: "CMPS 161", value: 1 },
  { label: "CMPS 257", value: 2 },
  { label: "CMPS 280", value: 3 },
  { label: "CMPS 285", value: 4 },
    { label: "CMPS 290", value: 5 },
  { label: "CMPS 293", value: 5 }
];

const CS2 = [
    { label: "CMPS 375", value: 1 },
    { label: "CMPS 390", value: 2 },
    { label: "CMPS 391", value: 3 },
    { label: "CMPS 401", value: 4 },
    { label: "CMPS 411", value: 4 },
    { label: "CMPS 401", value: 4 },
    { label: "CMPS 415", value: 5 },
    { label: "CMPS 431", value: 5 },
    { label: "CMPS 479", value: 5 },
    { label: "CMPS 482", value: 5 }
];

const Math1 = [
    { label: "MATH 161", value: 1 },
    { label: "MATH 200", value: 2 },
    { label: "MATH 201", value: 3 },
    { label: "MATH 223", value: 4 }    
];

const Math2 = [
    { label: "MATH 312", value: 1 },
    { label: "MATH 350", value: 2 },
    { label: "MATH 360", value: 3 },
    { label: "MATH 370", value: 4 },
    { label: "MATH 380", value: 4 },
    { label: "MATH 417", value: 4 },
    { label: "MATH 441", value: 5 }

];

class Class extends Component {
    render() {
        debugger
        if (this.props.loggedIn === false) {
            alert("Unauthorized: You need to log in first!");
            this.props.history.push('/');
        }

           
                return(
      <Fragment>
            <Nav loggedIn={this.props.loggedIn} logOut={this.props.logOut} />
            <Container className="main">                                                   
                        <div className="title">Class Discussion Thread</div>
                        <Grid>
                            <p>Please select the class to join the discussion thread</p>
                            <Grid.Column width={4}></Grid.Column>

                            <Grid.Column width={5}>
                                <p className="major-title">Computer Science</p>
                                <p>Class level 100-200</p>
                                <div className="form-major">
                                    <Select className="select" options={CS1} />
                                </div>
                                <p>Class level 300-400</p>
                                <div className="form-major">
                                    <Select className="select" options={CS2} />
                                </div>
                                </Grid.Column>

                            <Grid.Column width={5}>
                                <p className="major-title">Mathematics</p>
                                <p>Class level 100-200</p>
                                <div className="form-major">
                                    <Select className="select" options={Math1} />
                                </div>
                                <p>Class level 300-400</p>
                                <div className="form-major">
                                    <Select className="select" options={Math2} />
                                </div>
                            </Grid.Column>

                      <Grid.Column width={2}></Grid.Column>

          </Grid>
        </Container>
      </Fragment>
    );
  }       
    export default Class;
