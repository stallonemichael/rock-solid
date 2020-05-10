import React from 'react';

import Hero from '../../components/hero/hero';
import Directory from '../../components/directory/directory';
import CustomButton from '../../components/custom-button/custom-button';
import AboutContent from '../../components/about-content/about-content';
import Footer from '../../components/footer/footer';

import './homepage.scss';

const HomePage = () => (
  <div className='homepage'>
    <Hero />
    <Directory />
    <div className='contact-ribbon'>
      <div className='ribbon-text'>Rock Solid Brick &amp; Masonry</div>
      <CustomButton inverted>Get your free quote</CustomButton>
    </div>
    <AboutContent />
    <Footer />
  </div>
);

export default HomePage;
