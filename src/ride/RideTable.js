import React from "react";
import APIURL from "../helpers/environment";
import { Table, Button } from "reactstrap";

const RideTable = (props) => {




    const rideDelete = (rideToDelete) => {
        fetch(`${APIURL}/log/${rideToDelete.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken,
            }),
        }).then(() => props.fetchRide());
    };



    const rideMapper = () => {
        return props.rides.map((ride, index) => {
            let newDate = new Date(ride.date);
            console.log(newDate);
            console.log(newDate instanceof Date);
            return (
                <tr key={index}>
                    <td>{newDate.toDateString()}</td>
                    <td>{ride.activity}</td>
                    <td>{ride.duration}</td>
                    <td>{ride.notes}</td>
                    <td>
                        <Button
                            color='warning'
                            onClick={() => {
                                props.setRideToUpdate(ride);
                                props.updateOn();
                            }}
                        >
                            Update
                        </Button>
                        <Button
                            color='danger'
                            onClick={() => {
                                rideDelete(ride);
                            }}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div>
            <h3>Ride History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Duration</th>
                        <th>What did you enjoy?</th>
                    </tr>
                </thead>
                <tbody>{rideMapper()}</tbody>
            </Table>
        </div>
    );
};

export default RideTable;
