import styled from 'styled-components';

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactRibbon = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-around;
  padding: 15px;
  & button {
    align-self: center;
    &:hover {
      border: 1px solid white;
    }
  }
`;

export const RibbonText = styled.div`
  color: white;
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  margin-bottom: 6px;
  font-size: 18px;
  text-transform: uppercase;

  @media screen and (min-width: 550px) {
    font-size: 24px;
  }
`;
