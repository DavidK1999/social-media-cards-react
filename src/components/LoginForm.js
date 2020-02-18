import React from 'react';
import {Button, Form, Message } from 'semantic-ui-react';
import useForm from '../hooks/useForm';
import { useSelector } from 'react-redux';

const LoginForm = () => {
    
   const { handleInputChange, login, message } = useForm();
    
    return (
        
        <Form onSubmit={login}>
        {message ? <Message negative >{message}</Message> : null}
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
            type="email"
            onChange={handleInputChange}

            />
            
            <Form.Input 
            icon = "user secret"
            iconPosition = "left"
            label='Password' 
            placeholder='joe@schmoe.com' 
            name="password" 
            type="password"
            onChange={handleInputChange}
            />


            <Button>Login</Button>
        </Form>
    )
}

export default LoginForm