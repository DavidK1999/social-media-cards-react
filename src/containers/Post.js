import React  from 'react';
import { Card, Icon, Label, Dropdown, Button } from 'semantic-ui-react';
import useForm from '../hooks/useForm';
import '../styles/styles.css'

const Post = ({posts, user, loggedIn}) => {
    const {deletePost, setPostInState, likePost, follow, findTagged} = useForm();
    
    const postToBeRendered = posts && posts.map((post, i) => {
        const tags = post.tags && post.tags.map((tag, i) => <Label id="tag" key={i} onClick={()=>findTagged(tag)}><Icon name="hashtag">  {tag} </Icon></Label>)
            return(
                <Card key={i} id="card">
                <Card.Content id="card-content">
                <Card.Header id="card-header">
                    <Button icon labelPosition="left" id="user-post-label">
                            <Icon name="user"/> {post.user.username} 
                    </Button>
                    {post.user._id === user._id && loggedIn ?
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
                    :
                    <>
                        {user.followedUsers && user.followedUsers.includes(post.user.username)
                        ? 
                        <Button icon labelPosition="left" className="follow">
                            <Icon name="check"/> Following 
                        </Button>
                        :
                        <Button icon labelPosition="left" onClick={() => follow(post.user)} className="follow">
                            <Icon name="user plus"/> Follow
                        </Button>
                        }
                    </>
                    }
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
                {user.likedPosts && user.likedPosts.includes(post._id)
                ? 
                    <Button icon labelPosition='left'>
                        <Icon name='star' id="liked" />
                        {post.likes}
                    </Button>

                :  
                    <Button 
                        icon 
                        labelPosition='left'
                        onClick={() => likePost(post)}>
                        <Icon name='star' />
                        {post.likes}
                    </Button>

                }
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