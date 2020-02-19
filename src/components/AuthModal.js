import React from 'react';
import { Modal } from 'semantic-ui-react'
import * as UserActionCreators from '../redux/actions/user';
import {useSelector, useDispatch} from 'react-redux';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';


const AuthModal = () => {
    const action = useSelector(state => state.user.action)
    const dispatch = useDispatch(UserActionCreators);

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
