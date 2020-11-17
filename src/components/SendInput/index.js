import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeInput, sendMessage } from '../../actions/chat'
import FaIcon from '../FaIcon';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button';

const SendInput = () => {
  const messageTextState = useSelector(state => state.chat.messageText)
  const dispatch = useDispatch()

  const ChatInput = styled.input`
    padding: 0 2vw;
    height: 5vh;
    width: 86.7vw;
    background-color: rgba(0, 0, 0, 0.1);
    border: 0.1vw solid rgba(0, 0, 0, 0.2);
    border-right: none;
  `
  return (
    <div>
      <ChatInput className="input" type="text" name="messageText" placeholder="Send a message" value={messageTextState} onChange={(e) => dispatch(changeInput(e))} />
      <Button className="chat__button" text={<FaIcon className="paper-plain" icon={faPaperPlane} />} onClick={() => dispatch(sendMessage())} />
    </div>
  )
}

export default SendInput;