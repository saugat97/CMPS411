import React, { Component, Fragment } from "react";
import Nav from "../Nav";
import { Grid, Button, Container, Segment, Card } from "semantic-ui-react";
import { Tweet } from "react-twitter-widgets";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Container className="main">
          <Grid>
            <Grid.Column width={3}>
              <div className="segment1">
                <div className="label-student-engagement">
                  Student Engagement
                </div>
                <a href="http://www.southeastern.edu/admin/cab/index.html">
                  <img
                    src="/assets/campusactivities.jpg"
                    className="se-image"
                    alt="Selu Leonet"
                  />
                </a>
                <a href="http://www.southeastern.edu/admin/fsl/index.html">
                  <img
                    src="/assets/greeklife.jpg"
                    className="se-image"
                    alt="Selu Moodle"
                  />
                </a>
                <a href="http://www.southeastern.edu/admin/lead_dev/index.html">
                  <img
                    src="/assets/leadershipdevelopment.jpg"
                    className="se-image"
                    alt="Selu Webmail"
                  />
                </a>
                <a href="http://www.southeastern.edu/admin/misa/index.html">
                  <img
                    src="/assets/multicultural.jpg"
                    className="se-image"
                    alt="Selu Time"
                  />
                </a>
                <a href="http://www.southeastern.edu/admin/stu_orgs/index.html">
                  <img
                    src="/assets/studentorg.jpg"
                    className="se-image"
                    alt="Selu Time"
                  />
                </a>
                <a href="http://www.southeastern.edu/admin/sga/index.html">
                  <img
                    src="/assets/studentgov.jpg"
                    className="se-image"
                    alt="Selu Time"
                  />
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <Card style={{ width: "650px" }}>
                <div>
                  <a
                    class="twitter-timeline"
                    data-width="600px"
                    href="https://twitter.com/oursoutheastern?ref_src=twsrc%5Etfw"
                  >
                    Know more about Southeastern
                  </a>
                  <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8"
                  ></script>
                </div>
              </Card>
            </Grid.Column>

            <Grid.Column width={3}>
              <div className="segment2">
                <div className="label-quick-link">Quick Links</div>
                <a href="http://webmail.g.selu.edu/">
                  <img
                    src="/assets/webmail.png"
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
                <a href="http://calendar.selu.edu/">
                  <img
                    src="/assets/googlecalendar.png"
                    className="quicklink-image"
                    alt="Selu Webmail"
                  />
                </a>
                <a href="https://drive.google.com/drive/u/0/">
                  <img
                    src="/assets/googledrive.png"
                    className="quicklink-image"
                    alt="Selu Time"
                  />
                </a>
                <a href="https://psrv1.selu.edu:8002/psp/saprd/?cmd=login&languageCd=ENG&">
                  <img
                    src="/assets/leonet.png"
                    className="quicklink-image"
                    alt="Selu Time"
                  />
                </a>
                <a href="https://psrv8.selu.edu/psp/hrprd/EMPLOYEE/HRMS/h/?tab=DEFAULT&cmd=login&languageCd=ENG&">
                  <img
                    src="/assets/timeandlabor.png"
                    className="quicklink-image"
                    alt="Selu Time"
                  />
                </a>
                <a href="https://jobs.selu.edu/applicants/jsp/shared/Welcome_css.jsp">
                  <img
                    src="/assets/jobs.png"
                    className="quicklink-image"
                    alt="Selu Time"
                  />
                </a>
                <a href="http://www.southeastern.edu/search/index.html">
                  <img
                    src="/assets/directory.png"
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
