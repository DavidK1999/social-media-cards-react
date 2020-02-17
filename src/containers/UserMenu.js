import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown } from 'semantic-ui-react'
import * as UserActionCreators from '../redux/actions/user';

const UserMenu = () => {
    const user = useSelector(state => state.user.auth);
    const loggedStatus = useSelector(state => state.user.loggedIn);
    const dispatch = useDispatch();
    return (
        <Menu pointing secondary id="menu">
            
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
                    >   
                
                        <Dropdown.Menu>
                            <Dropdown.Header icon='cog' content='Options' />
                            <Dropdown.Divider />
                            <Dropdown.Item icon='sticky note' text='My Posts' />
                            <Dropdown.Item icon='users' text='People I Follow' />
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