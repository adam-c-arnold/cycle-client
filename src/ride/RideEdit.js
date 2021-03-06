import React, {useState} from 'react';
import APIURL from '../helpers/environment';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import moment from 'moment';

const RideEdit = (props) => {

  const [editDate, setEditDate] = useState(props.rideToUpdate.date);
  const [editActivity, setEditActivity] = useState(props.rideToUpdate.activity);
  const [editDuration, setEditDuration] = useState(props.rideToUpdate.duration);
  const [editNotes, setEditNotes] = useState(props.rideToUpdate.notes);

  let tryDate = new Date(editDate)

  const rideUpdate = (event) => {
    // console.log('workout', workout);
    event.preventDefault();
    fetch(`${APIURL}/log/${props.rideToUpdate.id}`, {
      method:'PUT',
      body: JSON.stringify({
        log: {
          date: editDate, 
          activity: editActivity, 
          duration: editDuration,
          notes: editNotes
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.sessionToken
      }
      }).then((res) => {
        props.fetchRide();
        props.updateOff();
      })
  }
  return(
    <Modal isOpen={true}>
      <ModalHeader>Log a Ride</ModalHeader>
      <ModalBody>
        <Form onSubmit={rideUpdate}>
          <FormGroup>
            <Label htmlFor="date">Edit Date:</Label>
            <Input name="date" type="date" value={moment(tryDate).format('YYYY-MM-DD')} onChange={(e) => setEditDate(e.target.valueAsDate)}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="activity">Edit Activity:</Label>
            <Input type="select" name="activity" value={editActivity} onChange={(e) => setEditActivity(e.target.value)}>
            <option>Select an activity</option>
            <option value="Cycling">Cycling</option>
            <option value="Gym">Gym</option>
            <option value="Swim">Swim</option>
            <option value="Walk">Walk</option>
            <option value="Run">Run</option>
            <option value="Other">Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="duration">Edit Duration:</Label>
            <Input name="duration" value={editDuration} onChange={(e) => setEditDuration(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="notes">Edit Notes:</Label>
            <Input name="notes" value={editNotes} onChange={(e) => setEditNotes(e.target.value)}/>
          </FormGroup>
          <Button type="submit">Update!</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
};

export default RideEdit;