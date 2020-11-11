import React from 'react';
import FaIcon from '../FaIcon';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import './header.scss';


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__left">
          <FaIcon icon={faTwitch} className="nav__left-item twitch" />
          <FaIcon icon={faClone} className="nav__left-item discover" />
        </div>
        <div className="nav_right">
          <button className="nav__right-item button">Ouvrir dans l'appli</button>
          <FaIcon icon={faSearch} className="nav__right-item search" />
          <FaIcon icon={faEllipsisH} className="nav__right-item dots" />
        </div>
      </nav>
    </header>
  )
}

export default Header;