import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, Navigation, } from './HeaderStyled';

function Header() {
  return (
    <HeaderContainer>
      <Logo>AlkaBot</Logo>
      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Usuários</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;

