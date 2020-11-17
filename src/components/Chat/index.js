import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageLine from '../MessageLine';
import SendInput from '../SendInput';
import LoginForm from '../LoginForm';

const StyledChat = styled.div`
  height: 54vh;
`

const ChatBox = styled.div`
  height: 42.8vh;
  padding: 3vh 3vw;
`

const Chat = () => {
  const chatState = useSelector(state => state.chat.chat)
  const isChatVisibleState = useSelector(state => state.chat.isChatVisible)

  return (
    <>
      {
        isChatVisibleState ? (
          <StyledChat>
            <ChatBox>
              {
                chatState.map(
                  (message, i) => <MessageLine message={message} key={i} />
                )
              }
            </ChatBox>
            <SendInput />
          </StyledChat>
        ) : (
            <LoginForm />
          )
      }
    </>
  )
}

export default Chat;