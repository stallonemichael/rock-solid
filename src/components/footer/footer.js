import React from 'react';

import {
  FooterContainer,
  Divider,
  Contact,
  Phone,
  Copyright,
} from './footer.styled';

const Footer = () => (
  <FooterContainer>
    <Contact>Contact Us</Contact>
    <Phone href='tel:+1631-872-3865'>631-872-3865</Phone>
    <Divider></Divider>
    <Copyright>&copy; 2020 Rock Solid Brick &amp; Masonry</Copyright>
  </FooterContainer>
);

export default Footer;
