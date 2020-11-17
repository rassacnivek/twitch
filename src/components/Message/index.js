import React from 'react'
import styled from 'styled-components';

const Message = (props) => {
  const MessageLine = styled.div`
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
  return (
    <MessageLine>
      <Username>{props.message.username}</Username>
      <Message>{props.message.message}</Message>
    </MessageLine>
  )
}

export default Message;