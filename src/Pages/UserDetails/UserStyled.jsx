import styled from 'styled-components';

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserDetailsTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const UserDetailsItem = styled.p`
  font-size: 24px;
  margin-bottom: 5px;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
