import React from 'react';
import {Form, Button, TextArea, Card, Divider, Label, Message } from 'semantic-ui-react';
import useForm from '../hooks/useForm';
import { useSelector } from 'react-redux';
import '../styles/styles.css';

const CreatePostForm = () => {
    const { createTags, handleInputChange, createPost, message } = useForm();
    const posts = useSelector(state => state.post.posts);

    return (
        <Card id="modal-card">
        <Card.Content>
            <Card.Header>
                Create
            </Card.Header>
            <Divider/>
                <Card.Description id="form-container">
                    <Form onSubmit={createPost} id="post-form">
                    <div className="message">
                        {message ? <Message negative>{message}</Message> : null}
                    </div>
                        <Label>Body</Label>
                        <TextArea
                        icon = "book" 
                        iconPosition = "left"
                        label="body"
                        placeholder="What's on your mind?" 
                        name="body"
                        onChange={handleInputChange}
                        />

                        <Divider/>
                        <Label>Tags</Label>
                        <TextArea
                        icon="tag"
                        iconPosition = "left"
                        label='tags' 
                        placeholder='tag, it, baby,' 
                        name="tags"
                        maxLength={message ? "0" : "100"} 
                        onChange={createTags}
                        />
                        <Button>Create</Button>

                    </Form>
                </Card.Description>
        </Card.Content>
        <Divider/>
        </Card>
    );
}
 
export default CreatePostForm;