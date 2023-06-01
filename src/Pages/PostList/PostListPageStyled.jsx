import styled from 'styled-components';

export const PostListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const PostCard = styled.div`
  width: 20%;
  margin: 1%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  a {
    display: block;
    color: #fff;
    background-color: #007bff;
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #0062cc;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 1024px) {
    width: calc(33.333% - 1.5%);
  }

  @media screen and (max-width: 768px) {
    width: calc(50% - 1.5%);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 10px 0;
  }
`;
