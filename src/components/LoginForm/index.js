import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import FormGroup from '../FormGroup'
import { setUsername, changeInput } from '../../actions/chat'
import Button from '../Button'

const LoginForm = () => {
  const usernameState = useSelector(state => state.chat.username)
  const dispatch = useDispatch()

  const LoginForm = styled.div`
    height: 32vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 11vh 13vw;
  `
  const Title = styled.div`
    font-size: 20px;
  `
  return (
    <LoginForm>
      <Title>Please, register your username !</Title>
      <FormGroup inputName="username" label="Username" value={usernameState} onChange={(e) => dispatch(changeInput(e))} />
      <Button className="login__button" text="Let's chat !" disabled={usernameState.length === 0} onClick={() => dispatch(setUsername())} />
    </LoginForm>
  )
}

export default LoginForm
