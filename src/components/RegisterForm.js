import React from 'react';
import {Button, Form } from 'semantic-ui-react';
import useForm from '../hooks/useForm';

const RegisterForm = () => {
    
   const { handleInputChange, register } = useForm();
    
    return (
        <Form onSubmit={register}>
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
            <Button>Register</Button>
        </Form>
    )
}

export default RegisterForm