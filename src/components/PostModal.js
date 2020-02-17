import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import EditPostForm from './EditPostForm';
import CreatePostForm from './CreatePostForm';

const PostModal = () => {
    const posting = useSelector(state => state.post.action)
    const dispatch = useDispatch();

    return (
        <Modal 
            open={posting} 
            closeIcon
            onClose={() => dispatch({type: 'CLOSEPOSTMODAL'})}
            id="post-modal" 
            basic
            centered={true}>
            <Modal.Header>
            </Modal.Header>
            <Modal.Content id="user-form-container">
            {posting === 'create' ?  <CreatePostForm/> : <EditPostForm/>}
            <Modal.Content id="user-form-container">
                <button onClick={() => console.log(posting)}>action</button>
            </Modal.Content>
            </Modal.Content>
        </Modal>
    );
}
 
export default PostModal;