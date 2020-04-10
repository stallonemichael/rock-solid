import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button';

import './hero.scss';

const Hero = ({ history }) => (
  <div className='hero-image'>
    <div className='hero-text'>
      <h1>Welcome Home</h1>
      <h2>Rock Solid Brick &amp; Masonry</h2>
      <div className='button'>
        <CustomButton onClick={() => history.push('/projects')}>
          SEE MORE
        </CustomButton>
      </div>
    </div>
  </div>
);

export default withRouter(Hero);
