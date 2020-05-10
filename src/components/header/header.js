import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* import { ReactComponent as Logo } from '../../assets/rock_solid.svg'; */
import Burger from '../burger/burger';
import BurgerMenu from '../burger-menu/burger-menu';

import './header.scss';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        {/* <Logo /> */}
        ROCK SOLID
      </Link>
      <div className='options'>
        <Link className='option' to='/projects'>
          PROJECTS
        </Link>
        {/*         <Link className='option' to='/about'>
          ABOUT
        </Link> */}
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
      </div>
      <Burger open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </div>
  );
}

export default Header;
