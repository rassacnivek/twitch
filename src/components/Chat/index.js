import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, changeInput } from '../../actions/chat'
import './chat.scss';
import styled from 'styled-components';
import Message from '../Message';
import SendInput from '../SendInput';


const Chat = () => {
  const usernameState = useSelector(state => state.chat.username)
  const chatState = useSelector(state => state.chat.chat)
  const isChatVisibleState = useSelector(state => state.chat.isChatVisible)
  const dispatch = useDispatch()

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
                  (message, i) => <Message message={message} key={i}/>
                )
              }
            </ChatBox>
            <SendInput/>
          </Chat>
        ) : (
            <div className="login__form">
              <div className="login__form-title">Please, register your username !</div>
              <div className="form-group">
                <input id="username" name="username" value={usernameState} required onChange={(e) => dispatch(changeInput(e))} />
                <label htmlFor="username">Username</label>
              </div>
              <button className="login__form-button" disabled={usernameState.length === 0} onClick={() => dispatch(setUsername())}>Let's chat !</button>
            </div>
          )
      }
    </>
  )
}

export default Chat;