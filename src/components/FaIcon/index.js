import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FaIcon = (props) => {
  return (
    <FontAwesomeIcon icon={props.icon} className={props.className} onClick={props.onClick}/>
  )
}

export default FaIcon;