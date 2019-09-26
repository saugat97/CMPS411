import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import { Grid, Button, Container, Segment, Card } from "semantic-ui-react";
import { Tweet } from 'react-twitter-widgets'
import './Home.css';

class Home extends Component {
    
    

    render() {
        return (
            <Fragment>
                <Nav />
                <Container className="main">
                    <Grid>
                        <Grid.Column width={3}>
                            <div className="segment" style={{ height: '500px'}}>

                                </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Card style={{ width:'600px'}}>
                            <div>
                                <a class="twitter-timeline" data-width="600px" href="https://twitter.com/oursoutheastern?ref_src=twsrc%5Etfw">Know more about Southeastern</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                </div>
                                </Card>
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
