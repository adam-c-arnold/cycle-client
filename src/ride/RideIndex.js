import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import RideCreate from './RideCreate';
import RideTable from './RideTable';
import RideEdit from './RideEdit';
import APIURL from '../helpers/environment';

const WorkoutIndex = (props) => {

  const [ride, setRide] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [rideToUpdate, setRideToUpdate] = useState({});

  const fetchRide = () => {
    fetch(`${APIURL}log`, {
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    })
    .then( (res) => res.json())
    .then((logData) => {
      console.log(logData.logs)
      setWorkouts(logData.logs)
    })
  };

  const editUpdateRide = (ride) => {
    console.log(ride);
    setRideToUpdate(ride);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  }

  useEffect(() => {
    fetchWorkouts();
  }, [])

  console.log(ride)

 return(
   <div>
    <Container>
      <Row>
        <Col md="3">
          <RideCreate fetchRide={fetchRide} token={props.token} />
        </Col>
        <Col md="9">
          {(workouts.length) ? <RideTable ride={ride} editUpdateRide={editUpdateRide} updateOn={updateOn} fetchRide={fetchRide} token={props.token}/> : <h1>Log a ride!</h1>}
        </Col>
        {updateActive ? <RideEdit rideToUpdate={rideToUpdate} updateOff={updateOff} token={props.token} fetchRide={fetchRide} /> : <div></div>}
      </Row>
    </Container>
   </div>
 )
}

export default RideIndex;