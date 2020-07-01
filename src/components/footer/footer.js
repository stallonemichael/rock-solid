import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import FooterItem from '../footer-item/footer-item';

import {
  FooterContainer,
  QuickLinksContainer,
  QuickLinksTitle,
  Links,
  ProjectLinksContainer,
  ProjectLinksTitle,
  ContactContainer,
  ContactTitle,
  PhoneNumber,
  Divider,
  Copyright,
} from './footer.styled';

const Footer = ({ sections }) => (
  <FooterContainer>
    <QuickLinksContainer>
      <QuickLinksTitle>Quick Links</QuickLinksTitle>
      <Links to='/'>Home</Links>
      <Links to='/projects'>Projects</Links>
      <Links to='/contact'>Contact</Links>
    </QuickLinksContainer>
    <ProjectLinksContainer>
      <ProjectLinksTitle>Project Links</ProjectLinksTitle>
      {sections.map(({ id, ...otherSectionProps }) => (
        <FooterItem key={id} {...otherSectionProps} />
      ))}
    </ProjectLinksContainer>
    <ContactContainer>
      <ContactTitle>Call Us</ContactTitle>
      <PhoneNumber href='tel:+1631-872-3865'>631-872-3865</PhoneNumber>
    </ContactContainer>
    <Divider></Divider>
    <Copyright>&copy; 2020 Rock Solid Brick &amp; Masonry</Copyright>
  </FooterContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Footer);
