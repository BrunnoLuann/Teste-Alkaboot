import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserListContainer, UserItem, Button } from './UserListPageStyled';

function UserList() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleUserDetailsClick = (id) => {
    history.push(`/users/${id}`);
  }

  return (
    <UserListContainer>
      {users.map(user => (
        <UserItem key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <Button onClick={() => handleUserDetailsClick(user.id)}>Ver detalhes</Button>
        </UserItem>
      ))}
    </UserListContainer>
  );
}

export default UserList;









