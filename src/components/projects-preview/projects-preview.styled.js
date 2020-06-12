import styled from 'styled-components';

export const ProjectsPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (min-width: 550px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 38px;
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media screen and (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
