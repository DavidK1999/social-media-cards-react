import React, {useState} from 'react';
import { Modal, Button, Transition } from 'semantic-ui-react'
import * as UserActionCreators from '../redux/actions/user';
import {useSelector, useDispatch} from 'react-redux';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

// const transitions = [
//     'jiggle',
//     'flash',
//     'shake',
//     'pulse',
//     'tada',
//     'bounce',
//     'glow',
// ]

// const options = transitions.map((name) => ({
//     key: name,
//     text: name,
//     value: name,
//   }));

const AuthModal = () => {
    const action = useSelector(state => state.user.action)
    const dispatch = useDispatch(UserActionCreators);
    // const animations = {animation: transitions[0], duration: 500, visible: true}


    const handleModal = () => {
        dispatch({type: 'CLOSE'})
    }
    
    return (
        <Modal
            open={action}
            closeIcon
            onClose={handleModal}
            id="user-modal" 
            centered={true}>
            <Modal.Header>{action === 'login' ? "Login" : "Register"}</Modal.Header>
            <Modal.Content id="user-form-container">
            {action === 'login' ? <LoginForm/> : <RegisterForm/>}
            </Modal.Content>
        </Modal>
    )
}

export default AuthModal;
