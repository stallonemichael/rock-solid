import React from 'react';

import { StyledBurger } from './burger.styled';

const Burger = ({ open, setOpen, ...otherBurgerProps }) => {
  return (
    <StyledBurger
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
