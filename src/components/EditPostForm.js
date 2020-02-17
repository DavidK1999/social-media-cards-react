import React from 'react';
import {Form, Button, TextArea, Card, Divider, Label } from 'semantic-ui-react';
import useForm from '../hooks/useForm';
import { useSelector } from 'react-redux';

const EditPostForm = () => {
    const { createTags, handleInputChange, editPost } = useForm();

    return (
        <Card id="modal-card">
        <Card.Content>
            <Card.Header>
                Edit
            </Card.Header>
            <Divider/>
                <Card.Description id="form-container">
                    <Form onSubmit={editPost} id="post-form">
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
                        onChange={createTags}
                        />
                        <Button>Edit</Button>
                    </Form>
                </Card.Description>
        </Card.Content>
        <Divider/>
        </Card>
    );
}
 
export default EditPostForm;