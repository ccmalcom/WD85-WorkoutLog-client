import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const WorkoutCreate = (props) =>{
    const [description, setDescription] = useState();
    const [definition, setDefinition] = useState();
    const [result, setResult] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:4000/log/create', {
            method: 'POST',
            body: JSON.stringify({description: description, definition:definition, result: result}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((logData => {
            console.log(logData);
            setDescription('');
            setDefinition('Time');
            setResult('');
            props.fetchWorkouts();
        }))
    }

    return(
        <>
            <h3>Log a Workout</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='description'/>
                    <Input name='description' placeholder='What did you do?'value={description} onChange={(e) => setDescription(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='definition'/>
                    <Input type='select' name='definition' value={definition} onChange={(e) => setDefinition(e.target.value)}>
                        <option value="Time" selected>Time</option>
                        <option value="Weight">Weight</option>
                        <option value="Distance">Distance</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='result'/>
                    <Input name='result' placeholder='How long/far/much did you do it?'value={result} onChange={(e) => setResult(e.target.value)}/>
                </FormGroup>
                <Button type='submit'>Click to Submit</Button>
            </Form>
        </>
    )
}

export default WorkoutCreate;