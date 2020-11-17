import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { deleteUsername } from '../../actions/chat';
import FaIcon from '../FaIcon';

const NavRight = () => {
  const dispatch = useDispatch()
  const Div = styled.div`
    display: flex;
    align-items: center;
  `
  const Button = styled.button`
    margin-right: 4.5vw;
    width: 135px;
    background-color: #9147ff;
    color: white;
    border: 1px solid #9147ff;
    border-radius: 5px;
    padding: 6px 0px;
    font-weight: 700;
  `
  return (
    <Div>
      <Button>Ouvrir dans l'appli</Button>
      <FaIcon icon={faSearch} className="nav__right-item search" />
      <FaIcon icon={faSignOutAlt} className="nav__right-item sign-out" onClick={() => dispatch(deleteUsername())} />
    </Div>
  )
}

export default NavRight;