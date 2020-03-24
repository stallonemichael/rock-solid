import React from 'react';

import rockSolidHero from '../../assets/images/hero-image.jpg';
import './hero.scss';

const Hero = () => (
  <div className='hero'>
    <img src={rockSolidHero} alt='Rock Solid Brick & Masonry' />
    <div className='hero-text'>
      <h1>INSPIRING HARDSCAPES</h1>
      <button>See More</button>
    </div>
  </div>
);

export default Hero;
