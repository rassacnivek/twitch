import React from 'react'
import styled from 'styled-components';

const StyledMessageLine = styled.div`
  display: flex;
  font-size: 14px;
`
const Username = styled.div`
  font-weight: bold;
  margin-right: 4vw;
`
const Message = styled.div`
  overflow-wrap: break-word;
`

const MessageLine = (props) => {
  return (
    <StyledMessageLine>
      <Username>{props.message.username}</Username>
      <Message>{props.message.message}</Message>
    </StyledMessageLine>
  )
}

export default MessageLine;