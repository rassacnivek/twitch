import React from 'react'
import styled from 'styled-components';

const Button = (props) => {
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
    <Button>{props.text}</Button>
  )
}

export default Button;