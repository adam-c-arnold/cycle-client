import React from 'react';
import APIURL from '../helpers/environment';
import { Table, Button } from 'reactstrap';

const RideTable = (props) => {
  const deleteRide = (ride) => {
    fetch(`${APIURL}log/${workout.id}`, {
        method: 'DELETE', 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchRide())
  }

  const rideMapper = () => {
    console.log(props.ride);
    return props.ride.map((ride, index) => {
      let newDate = new Date(ride.date);
      console.log(newDate)
      console.log(newDate instanceof Date);
      return(
        <tr key={index}>
          <td>{newDate.toDateString()}</td>
          <td>{ride.activity}</td>
          <td>{ride.duration}</td>
          <td>{ride.notes}</td>
          <td>
            <Button color="warning" onClick={() => {props.editUpdateRide(ride); props.updateOn()}}>Update</Button>
            <Button color="danger" onClick={() => {deleteRide(ride)}}>Delete</Button>
          </td>
        </tr>
      )
    })
  };

  return(
    <div>
      <h3>Ride History</h3>
      <hr/>
      <Table striped>
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Duration</th>
            <th>What did you enjoy?</th>
          </tr>
        </thead>
        <tbody>
        {rideMapper()}
        </tbody>
      </Table>
    </div>
  );
};

export default RideTable;