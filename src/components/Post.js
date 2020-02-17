import React from 'react';
import { Card, Icon, Label, Dropdown } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../hooks/useForm';
import '../styles/styles.css'
import { updatePost } from '../redux/actions/post';


const Post = ({posts}) => {
    const user = useSelector(state => state.user.auth._id);
    const dispatch = useDispatch();

    const {deletePost, setPostInState} = useForm();


    
    const postToBeRendered = posts && posts.map((post, i) => {
        const tags = post.tags && post.tags.slice(0, 3).map((tag, i) => <Label id="tag" key={i}><Icon name="tag">  {tag} </Icon></Label>)
            return(
                <Card key={i} id="card">
                <Card.Content id="card-content">
                <Card.Header id="card-header">
                    <Icon name="user" id="card-user-icon"> <strong>{post.user.username}</strong></Icon>
                    {post.user._id === user ?
                        <Dropdown
                        icon='cog'
                        className='icon'
                        compact
                        pointing
                        id="post-dropdown"
                        >
                        <Dropdown.Menu id="popup" compact>
                            <Dropdown.Item icon='edit' text='Edit' onClick={() => setPostInState(post)}/>
                            <Dropdown.Item icon='bomb' text='Delete' onClick={() => deletePost(post)}/>
                        </Dropdown.Menu>
                        </Dropdown>
                    :null}
                
                </Card.Header>
                <Card.Meta>
                    <span className='date'>Posted: {post.timestamp}</span>
                </Card.Meta>
                <Card.Description>
                    {post.body}
                </Card.Description>
                </Card.Content>
                <Card.Content extra id="tags">
                {tags}
                </Card.Content>
                <Card.Content extra id="tags">
                    <button onClick={()=>console.log(post)}>Log</button>
                </Card.Content>
        
            </Card>
            )
        });

        return(
            <div className="post">
                {postToBeRendered}
            </div>
        );
    }

export default Post;