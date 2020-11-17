import React from 'react'
import styled from 'styled-components';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import FaIcon from '../FaIcon';

const NavLeft = () => {
  const Div = styled.div`
    display: flex;
    align-items: center;
  `
  return (
    <Div>
      <FaIcon icon={faTwitch} className="twitch" />
      <FaIcon icon={faClone} className="discover" />
    </Div>
  )
}

export default NavLeft;