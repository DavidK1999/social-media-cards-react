import React from 'react';
import {Button, Form } from 'semantic-ui-react';
import useForm from '../hooks/useForm';

const LoginForm = () => {
    
   const { handleInputChange, login } = useForm();
    
    return (
        <Form onSubmit={login}>
            <Form.Input
            icon = "user" 
            iconPosition = "left"
            label='Username' 
            placeholder='joe@schmoe.com' 
            name="username"
            onChange={handleInputChange}
            />
            
            <Form.Input 
            icon="mail"
            iconPosition = "left"
            label='Email' 
            placeholder='joe@schmoe.com' 
            name="email"
            onChange={handleInputChange}

            />
            
            <Form.Input 
            icon = "user secret"
            iconPosition = "left"
            label='Password' 
            placeholder='joe@schmoe.com' 
            name="password" 
            onChange={handleInputChange}

            />
            <Button>Login</Button>
        </Form>
    )
}

export default LoginForm