import React from 'react';
import styled from 'styled-components';
import NavLeft from '../NavLeft';
import NavRight from '../NavRight';

const Header = () => {
  const Header = styled.header`
    height: 8vh;
  `
  const Nav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
  return (
    <Header>
      <Nav>
        <NavLeft />
        <NavRight />
      </Nav>
    </Header>
  )
}

export default Header;