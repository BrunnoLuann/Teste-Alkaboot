import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

export const Logo = styled.h1`
  font-size: 30px;
  margin-left: 20px;
  color: #222;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin-right: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 0;
      padding: 0;
      margin-top: 10px;
    }

    li {
      margin-left: 20px;
      font-size: 20px;
      font-weight: bold;
      color: #666;
      
      &:hover {
        color: #222;
      }

      @media (max-width: 768px) {
        margin: 10px 0;
        font-size: 16px;
      }
    }
  }
`;
