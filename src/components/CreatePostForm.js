import React from 'react';
import {Form, Button, TextArea, Card, Divider, Message } from 'semantic-ui-react';
import useForm from '../hooks/useForm';
import '../styles/styles.css';

const CreatePostForm = () => {
    const { createTags, handleInputChange, createPost, message } = useForm();

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
                        <label>Body</label>
                        <TextArea
                        icon = "book" 
                        iconPosition = "left"
                        label="body"
                        placeholder="What's on your mind?" 
                        name="body"
                        style={{minHeight: 200}}
                        maxLength={message ? "0" : "300"} 
                        onChange={handleInputChange}
                        />

                        <Divider/>
                        <label>Tags</label>
                        <TextArea
                        icon="tag"
                        iconPosition = "left"
                        label='tags' 
                        placeholder='tag, it, baby,' 
                        name="tags"
                        style={{minHeight: 200}}
                        maxLength={message ? "0" : "500"} 
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