import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fa-icon.scss';

const FaIcon = (props) => {
  return (
    <FontAwesomeIcon icon={props.icon} className={props.className} onClick={props.onClick}/>
  )
}

export default FaIcon;