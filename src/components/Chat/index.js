import React, { Component } from 'react';
import './chat.scss';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: "",
      chat: []
    }
  }

  componentDidMount() {
    let chat = localStorage.getItem('chat');
    if (chat !== undefined) {
      this.setState({
        chat: chat
      });
    }
  }

  onMessageChange = function (e) {
    this.setState({
      messageText: e.target.value
    })
  }

  onMessageSend = function (e) {
    console.log(e);
  }

  render() {
    return (
      <div className="chat">
        <div className="chat__box">

        </div>
        <div className="chat__input">
          <input type="text" name="messageText" value={this.state.messageText} onChange={this.onMessageChange} />
        </div>
      </div>
    )
  }
}

export default Chat;