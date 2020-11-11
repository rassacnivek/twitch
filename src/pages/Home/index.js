import React, { Component } from 'react'
import axios from 'axios'
import './home.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validate: null,
      streamer_id: 198506129 // SolaryFortnite streamer id
    }
  }

  componentDidMount() {
    axios.get('https://id.twitch.tv/oauth2/validate',
      {
        headers: {
          Authorization: `OAuth ${process.env.REACT_APP_APP_ACCESS_TOKEN}`
        }
      }
    )
      .then((datas) => {
        if (datas.client_id === process.env.REACT_APP_CLIENT_ID) {
          // FAIRE LA REQUETE VERS L'API
          this.setState({ validate: true })
        } else {
          axios.post('https://id.twitch.tv/oauth2/authorize',
            {
              "client_id": process.env.REACT_APP_CLIENT_ID,
              "client_secret": process.env.REACT_APP_APP_ACCESS_TOKEN,
              "grant_type": "client_credentials"
            })
            .then(datas => this.setState({ validate: true }))
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="home">
        Home
      </div>
    )
  }
}

export default Home;
