import React from 'react';
import {Form, Button, TextArea, Card, Divider, Label } from 'semantic-ui-react';
import useForm from '../hooks/useForm';
import { useSelector } from 'react-redux';

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
                        <button onClick={() => console.log(posts)}>Click me boi</button>

                    </Form>
                </Card.Description>
        </Card.Content>
        <Divider/>
        </Card>
    );
}
 
export default CreatePostForm;