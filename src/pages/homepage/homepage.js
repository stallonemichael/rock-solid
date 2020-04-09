import React from 'react';

import Hero from '../../components/hero/hero';
import Directory from '../../components/directory/directory';
import './homepage.scss';

const HomePage = () => (
  <div className='homepage'>
    <Hero />
    <Directory />
  </div>
);

export default HomePage;
