import React, {useState, useEffect} from 'react';
import APIURL from '../helpers/environment';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RideCreate = (props) => {
  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  

  const handleSubmit = (ride) => {
    ride.preventDefault();
    fetch(`${APIURL}/log`, { 
      method: 'POST', 
      body: JSON.stringify({log: 
        {
          date: date, 
          activity: activity, 
          duration: duration,
          notes: notes
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.sessionToken 
      })
    }) 
    .then((res) => res.json())
    .then((data) => { 
      console.log(data);
      setDate(''); 
      setActivity('');  
      setDuration('');
      setNotes('');
      props.fetchRide()
    })
  };

  return(
    <div>
      <h3>Log a Workout</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date"/>
          <Input onChange={(ride) => setDate(ride.target.value)} type="date" name="date" value={date} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="activity"/>
          <Input onChange={(ride) => setActivity(ride.target.value)} type="select" name="activity" value={activity}>
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
          <Label htmlFor="duration"/>
          <Input onChange={(ride) => setDuration(ride.target.value)} type="text" name="duration" placeholder="Time spent in hours or min." value={duration}/> 
        </FormGroup>
        <FormGroup>
          <Label htmlFor="notes"/>
          <Input onChange={(ride) => setNotes(ride.target.value)} type="textarea" name="notes" placeholder="Notes" value={notes}/> 
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </div>
  )
};

export default RideCreate