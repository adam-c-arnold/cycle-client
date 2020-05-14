import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import RideCreate from "./RideCreate";
import RideTable from "./RideTable";
import RideEdit from "./RideEdit";

import APIURL from "../helpers/environment";

const RideIndex = (props) => {
    const [rides, setRides] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [rideToUpdate, setRideToUpdate] = useState({});

    const fetchRide = () => {
        fetch(`${APIURL}/log/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: props.sessionToken,
            },
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((res) => {
                console.log(res);
                setRides(res.response);
            })
            .catch((err) => console.log(err));
    };

    // const editUpdateRide = (e, r) => {
    //     r.preventDefault();
    //     setRideToUpdate(r);
    // };

    const updateOn = () => {
        setUpdateActive(true);
    };

    const updateOff = () => {
        setUpdateActive(false);
    };

    // const handleSubmit =(event) => {
    //     event.preventDefault();
    //     fetchRide()
    // }
    useEffect(() => {
        console.log("FETCHED RIDES");
        fetchRide();
    }, []);

    return (
        <div>
            {/* <Form onSubmit={(e)=> handleSubmit(e)}> */}
            <Container>
                <Row>
                    <Col md='3'>
                        <RideCreate
                            sessionToken={props.sessionToken}
                            updateOn={updateOn}
                            token={props.sessionToken}
                            fetchRide={fetchRide}
                        />{" "}
                        : <h1>Log a workout!</h1>} />
                    </Col>
                    <Col md='9'>
                        {rides.length ? (
                            <RideTable
                                rides={rides}
                                setRideToUpdate={setRideToUpdate}
                                updateOn={updateOn}
                                sessionToken={props.sessionToken}
                                fetchRide={fetchRide}
                            />
                        ) : (
                            <h1>Log Your Activity!</h1>
                        )}
                    </Col>
                    {updateActive ? (
                        <RideEdit
                            rideToUpdate={rideToUpdate}
                            updateOff={updateOff}
                            sessionToken={props.sessionToken}
                            fetchRide={fetchRide}
                        />
                    ) : (
                        <div></div>
                    )}
                </Row>
            </Container>
            {/* </Form> */}
        </div>
    );
};

export default RideIndex;
