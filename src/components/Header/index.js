import React from 'react';
import styled from 'styled-components';
import NavLeft from '../NavLeft';
import NavRight from '../NavRight';

const StyledHeader = styled.header`
  height: 8vh;
`
const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <NavLeft />
        <NavRight />
      </Nav>
    </StyledHeader>
  )
}

export default Header;