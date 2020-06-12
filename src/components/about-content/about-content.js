import React from 'react';

import {
  AboutContentContainer,
  TitleContainer,
  LogoContainer,
  TextContainer,
} from './about-content.styled';

const AboutContent = () => (
  <AboutContentContainer>
    <TitleContainer>GET TO KNOW US</TitleContainer>
    <LogoContainer alt='Rock Solid' />
    <TextContainer>
      Welcome to the home of Rock Solid Brick & Masonry! We are the #1 choice
      for quality brick repair and brick masonry. Established in 2002, we are a
      company that has built a reputation for solid customer commitment and
      expert brick work. We serve both home and business owners on Long Island,
      bringing our precision and professionalism to projects both large and
      small. We are experts in brick landscaping design, Driveways, Stoops and
      Stairs, and outdoor entertainment areas featuring Fire Pits, Outdoor BBQs,
      Hot Tubs, and Brick Pool Patios. We are licensed and insured.
    </TextContainer>
  </AboutContentContainer>
);

export default AboutContent;
