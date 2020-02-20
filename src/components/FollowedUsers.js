import React  from 'react';
import { useSelector } from 'react-redux';
import { Table, Icon } from 'semantic-ui-react';

const FollowedUsers = () => {
    const user = useSelector(state => state.user.auth);
    const followedUsers = user.followedUsers;
    const followedUsersData = user.followedUsersPosts;
    const listofFollowedUsers = followedUsers && followedUsers.map((user, i) => {
        return(
            <>
            <Table.Row>
            <Table.Cell>
              <Icon name='user' /> {user}
            </Table.Cell>
            <Table.Cell> <Icon name="copy"/> Posts: {followedUsersData[i].createdPosts}</Table.Cell>
            <Table.Cell> <Icon name="users"/> Following: {followedUsersData[i].followedUsersCount}</Table.Cell>
            {followedUsers.includes(user) ?
            <Table.Cell> Followers: <Icon name="users"/> {followedUsers.length}</Table.Cell>
            : null}
            </Table.Row>
          </>)
    });
    console.log(followedUsers);
    console.log(followedUsersData);
    console.log(user);
    return (
    <Table celled striped id="table">
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell colSpan='4'>Followed Users</Table.HeaderCell>
        </Table.Row>
    </Table.Header>

    <Table.Body>
      {listofFollowedUsers}
    </Table.Body>
  </Table>
    );
}
 
export default FollowedUsers;