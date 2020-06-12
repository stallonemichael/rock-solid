import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../assets/rock_solid.svg';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 24px;
  text-transform: uppercase;
  font-size: 50px;
  letter-spacing: 2px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 10px 0 10px 0;
  }

  @media screen and (max-width: 850px) {
    font-size: 30px;
  }
`;

export const HeroImage = styled(LogoSVG)`
  height: 80vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  /*   background-size: cover; */
  /* position: relative; */

  @media screen and (max-width: 500px) {
    height: 50vh;
  }

  @media screen and (max-width: 850px) {
    height: 60vh;
  }
`;

export const HeroText = styled.div`
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -0%);
  color: white;
  letter-spacing: 7px;
  text-transform: uppercase;
  &h1 {
    font-size: 72px;
  }
  &h2 {
    font-size: 26px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;
