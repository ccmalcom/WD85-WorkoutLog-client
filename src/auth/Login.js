import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) =>{
    const [username, setUsername] = useState('');
    const [passwordhash, setPasswordhash] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:4000/user/login',{
            method: 'POST',
            body: JSON.stringify({user:{username: username, passwordhash:passwordhash}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response)=> response.json())
        .then((data) =>{
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} required></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='passwordhash'>Password</Label>
                    <Input type='password' onChange={(e) => setPasswordhash(e.target.value)}  name='passwordhash' value={passwordhash} ></Input>
                </FormGroup>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    )
}

export default Login;