import React, { useState } from "react";
import "./RideAPI.css";
import RideIndex from "../RideIndex";
import Post from "../RideCreate";
import RideEdit from "../RideEdit";
import RideTable from "../RideTable";
import GetCard from "../../media/rideIcon.jpg";
import PostCard from "../../media/rideCreateCard.png";
import EditCard from "../../media/rideEditCard.png";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    Container,
} from "reactstrap";
import { Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const RideAPI = (props) => {
    return (
        <Router>
            <Container className='themed-container' fluid={true}>
                <div className='main'>
                    <h1>RIDE API</h1>
                    <Row>
                        <Col className='col'>
                            <div className='mainDiv'>
                                <Card className='cardName'>
                                    <CardImg
                                        top
                                        width='100%'
                                        src={GetCard}
                                        alt='GET Request'
                                    />
                                    <CardBody>
                                        <CardTitle>Show Rides</CardTitle>
                                        <CardSubtitle>
                                            Search Table Using GET
                                        </CardSubtitle>
                                        <CardText>Card Text Here</CardText>
                                        <Button>GET</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className='col'>
                            <div className='mainDiv'>
                                <Card className='cardName'>
                                    <CardImg
                                        top
                                        width='100%'
                                        src={GetCard}
                                        alt='GET Request'
                                    />
                                    <CardBody>
                                        <CardTitle>GET RIDES</CardTitle>
                                        <CardSubtitle>GET Rides</CardSubtitle>
                                        <CardText>Some Text Here</CardText>
                                        <Button>GET</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className='col'>
                            <div className='mainDiv'>
                                <Card className='cardName'>
                                    <CardImg
                                        top
                                        width='100%'
                                        src={PostCard}
                                        alt='POST REQUEST'
                                    />
                                    <CardBody>
                                        <CardTitle>POST RIDES</CardTitle>
                                        <CardSubtitle>POST Rides</CardSubtitle>
                                        <CardText>Card Text Here</CardText>
                                        <Button>POST</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className='col'>
                            <div className='mainDiv'>
                                <Card className='cardName'>
                                    <CardImg
                                        top
                                        width='100%'
                                        src={EditCard}
                                        alt='PUT/DELETE Request'
                                    />
                                    <CardBody>
                                        <CardTitle>DELETE RIDES</CardTitle>
                                        <CardSubtitle>
                                            Delete Rides
                                        </CardSubtitle>
                                        <CardText>Card Text Here</CardText>
                                        <Button color='danger'>DELETE</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Post sessionToken={props.sessionToken} />
        </Router>
    );
};

export default RideAPI;

// ADD ROUTING
{
    /* <Route></Route>
<Switch></Switch> */
}
