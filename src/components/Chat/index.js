import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FaIcon from '../FaIcon';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { setUsername, changeInput, sendMessage } from '../../actions/chat'
import './chat.scss';


const Chat = () => {
  const usernameState = useSelector(state => state.chat.username)
  const messageTextState = useSelector(state => state.chat.messageText)
  const chatState = useSelector(state => state.chat.chat)
  const isChatVisibleState = useSelector(state => state.chat.isChatVisible)
  const dispatch = useDispatch()
  return (
    <>
      {
        isChatVisibleState ? (
          <div className="chat">
            <div className="chat__box">
              {
                chatState.map(
                  (message, i) =>
                    <div className="chat__box-message" key={i}>
                      <div className="username">{message.username}</div>
                      <div className="message">{message.message}</div>
                    </div>
                )
              }
            </div>
            <div className="chat__input">
              <input className="input" type="text" name="messageText" placeholder="Send a message" value={messageTextState} onChange={(e) => dispatch(changeInput(e))} />
              <button className="button" onClick={() => dispatch(sendMessage())}>
                <FaIcon className="paper-plain" icon={faPaperPlane} />
              </button>
            </div>
          </div>
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