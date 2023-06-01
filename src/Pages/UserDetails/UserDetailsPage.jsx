import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { UserDetailsContainer, UserDetailsTitle, UserDetailsItem } from './UserStyled';

function UserDetails() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <UserDetailsContainer>
      <UserDetailsTitle>{user.name}</UserDetailsTitle>
      <UserDetailsItem>Username: {user.username}</UserDetailsItem>
      <UserDetailsItem>Email: {user.email}</UserDetailsItem>
      <UserDetailsItem>Phone: {user.phone}</UserDetailsItem>
      <UserDetailsItem>Website: {user.website}</UserDetailsItem>
    </UserDetailsContainer>
  );
}

export default UserDetails;

