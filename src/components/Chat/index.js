import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from '../Message';
import SendInput from '../SendInput';
import LoginForm from '../LoginForm';


const Chat = () => {
  const chatState = useSelector(state => state.chat.chat)
  const isChatVisibleState = useSelector(state => state.chat.isChatVisible)

  const Chat = styled.div`
    height: 54vh;
  `

  const ChatBox = styled.div`
    height: 42.8vh;
    padding: 3vh 3vw;
  `
  return (
    <>
      {
        isChatVisibleState ? (
          <Chat>
            <ChatBox>
              {
                chatState.map(
                  (message, i) => <Message message={message} key={i} />
                )
              }
            </ChatBox>
            <SendInput />
          </Chat>
        ) : (
            <LoginForm />
          )
      }
    </>
  )
}

export default Chat;