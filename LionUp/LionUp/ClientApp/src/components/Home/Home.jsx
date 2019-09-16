import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import { Grid, Button, Container, Segment } from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Container className="main">
          <Grid>
            <Grid.Column width={13}>
              <div className="segment">
                <div className="label-quick-link">Home</div>
                <img
                  src="/assets/img1.jpg"
                  className="feed-image"
                  alt="image1"
                />
                <h2>Career Fair 2019</h2>
                <div className="event-info">
                  <p>Thursday, September 19, 2019</p>
                  <p> 9:00am - 2:30pm</p>
                  <p> Pennington Student Activity Center</p>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="segment">
                <div className="label-quick-link">Quick Links</div>
                <a href="https://www.southeastern.edu/leonet/">
                  <img
                    src="/assets/leonet.png"
                    className="quicklink-image"
                    alt="Selu Leonet"
                  />
                </a>
                <a href="https://moodle.selu.edu/moodle/">
                  <img
                    src="/assets/moodle.png"
                    className="quicklink-image"
                    alt="Selu Moodle"
                  />
                </a>
                <a href="https://www2.southeastern.edu/external/google_login/">
                  <img
                    src="/assets/webmail.png"
                    className="quicklink-image"
                    alt="Selu Webmail"
                  />
                </a>
                <a href="https://psrv8.selu.edu/psp/hrprd/EMPLOYEE/HRMS/h/?tab=DEFAULT&cmd=login&languageCd=ENG&">
                  <img
                    src="/assets/timeandlabor.png"
                    className="quicklink-image"
                    alt="Selu Time"
                  />
                </a>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
export default Home;
