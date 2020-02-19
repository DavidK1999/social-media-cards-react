import React, {useState} from 'react';
import {Form, Button, TextArea, Card, Divider, Label, Message } from 'semantic-ui-react';
import useForm from '../hooks/useForm';
import { useSelector } from 'react-redux';

const EditPostForm = () => {
    const { createTags, handleInputChange, editPost, message } = useForm();
    const currentPost = useSelector(state => state.post.post);
    const tags = currentPost.tags && currentPost.tags.join(",");

    return (
        <Card id="modal-card">
        <Card.Content>
            <Card.Header>
                Edit
            </Card.Header>
            <Divider/>
                <Card.Description id="form-container">
                    <Form onSubmit={editPost} id="post-form">
                        {message ? <Message negative>{message}</Message> : null}
                        <label>Body</label>
                        <TextArea
                        icon = "book" 
                        iconPosition = "left"
                        label="body"
                        placeholder="What's on your mind?" 
                        name="body"
                        onChange={handleInputChange}
                        >
                        {currentPost.body}
                        </TextArea>

                        <Divider/>
                        <label>Tags</label>
                        <TextArea
                        icon="tag"
                        iconPosition = "left"
                        label='tags' 
                        placeholder='tag, it, baby,' 
                        name="tags"
                        maxLength={message ? "0" : "100"}
                        onChange={createTags}
                        >
                        {tags}
                        </TextArea>
                        <Button>Edit</Button>
                    </Form>
                </Card.Description>
        </Card.Content>
        <Divider/>
        </Card>
    );
}
 
export default EditPostForm;