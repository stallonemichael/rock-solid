import React from 'react';

import rockSolidHero from '../../assets/rock-solid_Logo.png';
import './hero.scss';

const Hero = () => (
  <div className='hero'>
    <h1 className='hero-text'>ROCK SOLID</h1>
    <img src={rockSolidHero} alt='Rock Solid' />
    <h1 className='hero-text'>BRICK &amp; MASONRY</h1>
  </div>
);

export default Hero;
