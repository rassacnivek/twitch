import React from 'react'
import styled from 'styled-components';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import FaIcon from '../FaIcon';

const StyledNavLeft = styled.div`
  display: flex;
  align-items: center;
`
const NavLeft = () => {
  return (
    <StyledNavLeft>
      <FaIcon icon={faTwitch} className="twitch" />
      <FaIcon icon={faClone} className="discover" />
    </StyledNavLeft>
  )
}

export default NavLeft;