import styled from 'styled-components';

export const ProjectItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  align-items: center;
  padding: 4px 8px;

  @media screen and (min-width: 550px) {
    width: 45vw;
  }
  @media screen and (min-width: 900px) {
    width: 23vw;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
