import React from 'react';
/* import { withRouter } from 'react-router-dom'; */

/* import CustomButton from '../custom-button/custom-button'; */
import { HeroContainer, HeroTitle, HeroImage } from './hero.styled';

const Hero = (props) => (
  <HeroContainer>
    <HeroTitle>Rock Solid Brick &amp; Masonry</HeroTitle>
    <HeroImage>
      {/*     <HeroText>
      <h1>Welcome Home</h1>
      <h2>Rock Solid Brick &amp; Masonry</h2>
      <ButtonContainer
        <CustomButton inverted onClick={() => history.push('/projects')}>
          SEE MORE
        </CustomButton>
      </ButtonContainer>
    </HeroText> */}
    </HeroImage>
  </HeroContainer>
);

export default Hero;
