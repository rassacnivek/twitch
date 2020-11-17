import React from 'react'
import styled from 'styled-components';

const Button = (props) => {
  const Button = styled.button`
    &.header__button{
      margin-right: 4.5vw;
      width: 135px;
      background-color: #9147ff;
      color: white;
      border: 1px solid #9147ff;
      border-radius: 5px;
      padding: 6px 0px;
      font-weight: 700;
    }
    &.chat__button{
      height: 5.2vh;
      width: 9vw;
      background-color: rgba(0, 0, 0, 0.1);
      border: 0.1vw solid rgba(0, 0, 0, 0.2);
      border-left: none;
    }
  `
  return (
    <Button className={props.className}>{props.text}</Button>
  )
}

export default Button;