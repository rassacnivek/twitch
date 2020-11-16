import { SET_USERNAME, CHANGE_INPUT, SEND_MESSAGE, DELETE_USERNAME } from '../actions/chat'
const initialState = {
  username: localStorage.getItem('username') ? localStorage.getItem('username') : "",
  messageText: "",
  chat: localStorage.getItem('chat') ? JSON.parse(localStorage.getItem('chat')) : [],
  isChatVisible: localStorage.getItem('username') !== null
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      localStorage.setItem('username', state.username);
      return {
        ...state,
        isChatVisible: true
      }
    case CHANGE_INPUT:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      }
    case SEND_MESSAGE:
      if (state.messageText.length === 0) {
        return state;
      }

      let chat = state.chat;
      chat.push({
        username: state.username,
        message: state.messageText
      })

      localStorage.setItem('chat', JSON.stringify(state.chat))
      return {
        ...state,
        chat: chat,
        messageText: ""
      }
    case DELETE_USERNAME:
      localStorage.removeItem('username')
      return {
        ...state,
        username: "",
        isChatVisible: false
      }
    default:
      return state
  }
}

export default chatReducer