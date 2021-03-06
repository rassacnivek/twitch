import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
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
  &.login__button{
    width: 135px;
    background-color: #9147ff;
    color: white;
    border: 1px solid #9147ff;
    border-radius: 5px;
    padding: 6px 0px;
    font-weight: 700;
    &:disabled {
      background-color: rgba(19, 1, 1, 0.3);
      border: 1px solid rgba(19, 1, 1, 0.3);
      color: #666666;
    }
  }
`

const Button = (props) => {
  return (
    <StyledButton className={props.className} disabled={props.disabled}>{props.text}</StyledButton>
  )
}

export default Button;