export const SET_USERNAME = 'SET_USERNAME'
export const CHANGE_INPUT = "CHANGE_INPUT"
export const SEND_MESSAGE = "SEND_MESSAGE"
export const DELETE_USERNAME = 'DELETE_USERNAME'

export const setUsername = () => ({
  type: SET_USERNAME,
})

export const changeInput = (event) => ({
  type: CHANGE_INPUT,
  payload: {
    inputName: event.target.name,
    inputValue: event.target.value
  }
})

export const sendMessage = () => ({
  type: SEND_MESSAGE,
})

export const deleteUsername = () => ({
  type: DELETE_USERNAME
})