import styled from 'styled-components';

export const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const UserItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: #1E90FF;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4169E1;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
