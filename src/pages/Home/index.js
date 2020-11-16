import React from 'react'
import ReactPlayer from "react-player"
import Header from '../../components/Header'
import Chat from '../../components/Chat';

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <div>
            <ReactPlayer controls width="100vw" height="38vh" url="https://www.youtube.com/watch?v=j2gOU4o1jsQ&ab_channel=CorpseHusband" />
          </div>
          <Chat />
        </div>
      </div>
    </>
  )
}

export default Home;