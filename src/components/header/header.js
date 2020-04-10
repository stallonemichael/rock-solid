import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/rock_solid.svg';

import './header.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <div className='options'>
      <Link className='option' to='/projects'>
        PROJECTS
      </Link>
      <Link className='option' to='/about'>
        ABOUT US
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
