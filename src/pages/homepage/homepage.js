import React from 'react';
import { withRouter } from 'react-router-dom';

import Hero from '../../components/hero/hero';
import Directory from '../../components/directory/directory';
import CustomButton from '../../components/custom-button/custom-button';
import AboutContent from '../../components/about-content/about-content';
import Footer from '../../components/footer/footer';

import {
  HomepageContainer,
  ContactRibbon,
  RibbonText,
} from './homepage.styled';

const HomePage = ({ history }) => (
  <HomepageContainer>
    <Hero />
    <Directory />
    <ContactRibbon>
      <RibbonText>Rock Solid Brick &amp; Masonry</RibbonText>
      <CustomButton onClick={() => history.push('/contact')} inverted>
        Get your free quote
      </CustomButton>
    </ContactRibbon>
    <AboutContent />
    <Footer />
  </HomepageContainer>
);

export default withRouter(HomePage);
