import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/404.png'
import './pagenotfound.scss';

const PageNotFound = () => {
  return (
    <div className="error">
      <div className="error__img">
        <img src={img} alt="404" />
      </div>
      <div className="error__text">
        <div>
          I think that's not the page
        </div>
        <div>
          you were looking for..
        </div>
      </div>
      <div className="error__button">
        <Link className="error__button-link" to="/">Let's go Home</Link>
      </div>
    </div >
  )
}

export default PageNotFound
