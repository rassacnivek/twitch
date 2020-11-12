import React from 'react'
import ReactPlayer from "react-player"
import Chat from '../../components/Chat';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <div>
          <ReactPlayer controls width="100vw" height="38vh" url="https://www.youtube.com/watch?v=j2gOU4o1jsQ&ab_channel=CorpseHusband" />
        </div>
        <Chat />
      </div>
    </div>
  )
}

export default Home;