import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FaIcon = (props) => {
  const FaIcon = styled(FontAwesomeIcon)`
    &.twitch{
      margin-left: 2vw;
      font-size: 31px;
      color: #9147ff;
    }
    
    &.discover{
      font-size: 24px;
      margin-left: 4.5vw;
    }

    &.nav__right-item{
      margin-right: 4.5vw;
    }

    &.search,
    &.sign-out {
      font-size: 18px;
    }

    &.paper-plane{
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }
  `
  return (
    <FaIcon icon={props.icon} className={props.className} onClick={props.onClick} />
  )
}

export default FaIcon;