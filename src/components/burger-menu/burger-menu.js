import React from 'react';

import { StyledMenu } from './burger-menu.styled';

const BurgerMenu = ({ open, ...otherBurgerProps }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...otherBurgerProps}>
      <a href='/' tabIndex={tabIndex}>
        <span aria-hidden={true}>ROCK SOLID</span>
      </a>
      <a href='/projects' tabIndex={tabIndex}>
        <span aria-hidden={true}>Projects</span>
      </a>
      <a href='/about' tabIndex={tabIndex}>
        <span aria-hidden={true}>About</span>
      </a>
      <a href='/contact' tabIndex={tabIndex}>
        <span aria-hidden={true}>Contact</span>
      </a>
    </StyledMenu>
  );
};

export default BurgerMenu;
