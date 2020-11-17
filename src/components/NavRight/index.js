import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { deleteUsername } from '../../actions/chat';
import FaIcon from '../FaIcon';
import Button from '../Button';

const StyledNavRight = styled.div`
  display: flex;
  align-items: center;
`

const NavRight = () => {
  const dispatch = useDispatch()
  return (
    <StyledNavRight>
      <Button text="Ouvrir dans l'appli" className="header__button" />
      <FaIcon icon={faSearch} className="nav__right-item search" />
      <FaIcon icon={faSignOutAlt} className="nav__right-item sign-out" onClick={() => dispatch(deleteUsername())} />
    </StyledNavRight>
  )
}

export default NavRight;