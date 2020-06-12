import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../assets/rock_solid.svg';

export const AboutContentContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 32px;

  @media screen and (min-width: 800px) {
    font-size: 44px;
  }
`;

export const LogoContainer = styled(LogoSVG)`
  height: 10vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 10px;
`;

export const TextContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
`;
