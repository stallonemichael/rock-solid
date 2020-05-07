import React from 'react';

import { StyledBurger } from './burger.styled';

const Burger = ({ open, setOpen, ...otherBurgerProps }) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-label='Toggle menu'
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...otherBurgerProps}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
