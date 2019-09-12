import React, { Component } from "react";

import "./Account.css";
//import Register from "./Register";

import { Collapse } from 'reactstrap';
import {
    Card, Row, Col
} from 'reactstrap';
import state from "react";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
//import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
//import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";




const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
export default function Dashobard() {
    
    const classes = useStyles();
    const[expanded, setExpanded] = React.useState(false);
    function handleExpandClick() {
    setExpanded(!expanded);
    };
 return (
            <view>
                <Row>
                    <Col>
                    </Col>


                    <Col>
                   
                    <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        C
          </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Career Fair"
                                subheader="September 19, 2019"
                            />
                            <CardMedia
                                className={classes.media}
                                image="http://www.southeastern.edu/admin/career_srv/images/CFlayout.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Come, meet professionals and make your career. Dress professionally and bring your resume to get the job you want.
        </Typography>
                            </CardContent>
                     <CardActions disableSpacing>
                         
                         <IconButton aria-label="Add to favourites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                
                            </Collapse>
                        </Card>

                    </Col>

                    <Col>
                       
                                            
                        <Router>
                        <div style={{ display: "flex" }}>
                                <div
                                    style={{
                                        padding: "10px",
                                        width: "50%",
                                        background: "#D3D3D3",
                                        height: "80%"
                                    }}
                                >
                                    <ul style={{ listStyleType: "none", padding: "50px" }}>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/Moodle">Moodle</Link>
                                        </li>
                                        <li>
                                            <Link to="/Leonet">Leonet</Link>
                                        </li>
                                    </ul>

                                </div>

                               
                            </div>
                        </Router>
                        </Col>
                </Row>
                <br />
                <br />
                <div>
                    </div>
                <Row>
                    <Col>
                        </Col>

                    <Col>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    B
          </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="The Big Events"
                            subheader="August 19, 2019"
                        />
                        <CardMedia
                            className={classes.media}
                                image="http://www.southeastern.edu/_resources/ldpgalleries/.private_ldp/a84/production/master/f849a5b7-ba73-43f6-af4f-09e76a27359b.jpg"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                The big events happens every year. Come and meet new people and have fun.
        </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                     
                    </Card>
                    </Col>
                    <Col>
                    </Col>
                    </Row>
                 
            </view>
    );
   
    }



