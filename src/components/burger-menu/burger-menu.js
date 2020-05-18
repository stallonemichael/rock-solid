import React from 'react';
import { Link } from 'react-router-dom';

import { StyledMenu } from './burger-menu.styled';

const BurgerMenu = ({ open, setOpen, ...otherBurgerProps }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...otherBurgerProps}>
      <Link to='/' tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        <span aria-hidden={true}>ROCK SOLID</span>
      </Link>
      <Link to='/projects' tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        <span aria-hidden={true}>Projects</span>
      </Link>
      {/*       <a href='/about' tabIndex={tabIndex}>
        <span aria-hidden={true}>About</span>
      </a> */}
      <Link to='/contact' tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        <span aria-hidden={true}>Contact</span>
      </Link>
    </StyledMenu>
  );
};

export default BurgerMenu;
