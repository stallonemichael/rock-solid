import React, { useState } from 'react';

import Burger from '../burger/burger';
import BurgerMenu from '../burger-menu/burger-menu';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styled';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>ROCK SOLID</LogoContainer>
      <OptionsContainer>
        <OptionLink to='/projects'>PROJECTS</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
      </OptionsContainer>
      <Burger open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </HeaderContainer>
  );
};

export default Header;
