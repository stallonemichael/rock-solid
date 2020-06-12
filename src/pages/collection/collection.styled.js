import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media screen and (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
    align-self: center;
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
