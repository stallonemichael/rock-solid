import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      ROCK SOLID
    </Link>
    <div className='options'>
      <Link className='option' to='/projects'>
        PROJECTS
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      <Link className='option' to='/about'>
        ABOUT
      </Link>
    </div>
  </div>
);

export default Header;
