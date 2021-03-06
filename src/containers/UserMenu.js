import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'
import { getPosts, getUserPosts } from '../redux/actions/post';
import '../styles/styles.css';

const UserMenu = () => {
    const user = useSelector(state => state.user.auth);
    const loggedStatus = useSelector(state => state.user.loggedIn);
    const dispatch = useDispatch();
    const history = useHistory();

    const goHome = () => {
        history.push("/all");
        dispatch(getPosts());
    }

    return (
        <Menu pointing secondary id="menu" stackable>

            <Menu.Menu position="left" id="branding-menu">
                <Menu.Item 
                name='Community Cards'
                icon="copy"
                id="branding"
                />

            </Menu.Menu>

            <Menu.Menu position='right' id="user-menu">

            {!loggedStatus ?
                <>
                    
                    <Menu.Item 
                    name='login'
                    onClick={() => 
                    dispatch({type: 'MODAL', value: 'login'})}
                    />
                    <Menu.Item
                    name='register' 
                    onClick={() => 
                    dispatch({type: 'MODAL', value: 'register'})}
                    />
                </>
                :
                <>
                    <Menu.Item 
                    name='All Posts'
                    icon="globe"
                    onClick={() => goHome()}/>
                    
                    <Menu.Item
                    icon="book"
                    name='post'
                    onClick={() => 
                    dispatch({type: 'OPENPOSTMODAL', value: 'create'})}
                    />
                
                    <Dropdown
                    text={user.username}
                    icon='user'
                    floating
                    labeled
                    button
                    className='icon'
                    id="user-dropdown"
                    >   
                
                        <Dropdown.Menu>
                            <Dropdown.Header icon='cog' content='Options' />
                            <Dropdown.Divider />
                            <Dropdown.Item icon='sticky note' text='My Posts' onClick={() => dispatch(getUserPosts(user._id))}/>
                            <Dropdown.Item icon='users' text='People I Follow' onClick={() => history.push('/following')}/>
                            <Dropdown.Item 
                            icon='sign-out' 
                            text='Logout'
                            onClick={() => dispatch({type: 'LOGOUT'})}
                        />
                        </Dropdown.Menu>
                    </Dropdown>
              </>
              }
            </Menu.Menu>
        </Menu>
    )
}

export default UserMenu;