import React from 'react';
import { Link } from 'react-router-dom';

import { StyledMenu } from './burger-menu.styled';

const BurgerMenu = ({ open, setOpen, ...otherBurgerProps }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...otherBurgerProps}>
      <Link to='/' onClick={() => setOpen(!open)}>
        <span aria-hidden={true}>ROCK SOLID</span>
      </Link>
      <Link to='/projects' onClick={() => setOpen(!open)}>
        <span aria-hidden={true}>Projects</span>
      </Link>
      {/*       <a href='/about'>
        <span aria-hidden={true}>About</span>
      </a> */}
      <Link to='/contact' onClick={() => setOpen(!open)}>
        <span aria-hidden={true}>Contact</span>
      </Link>
    </StyledMenu>
  );
};

export default BurgerMenu;
