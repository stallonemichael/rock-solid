import styled from 'styled-components';

export const DirectoryHeadingContainer = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin: 10px 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (min-width: 530px) {
    font-size: 28px;
  }

  @media screen and (min-width: 850px) {
    display: flex;
    justify-content: center;
    margin: 24px;
    text-transform: uppercase;
    font-size: 50px;
    letter-spacing: 2px;
  }
`;

export const DirectoryMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4px;

  @media screen and (min-width: 530px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 100%;
    flex: 1;
    grid-gap: 0;
  }

  @media screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(14, 5vw);
    grid-gap: 40px 25px;
    padding: 24px;
    margin-bottom: 24px;
  }
`;
