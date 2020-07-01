import styled from 'styled-components';

export const Item = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  &:hover {
    color: lightgray;
  }
  @media screen and (min-width: 530px) {
    font-size: 1.3rem;
  }
`;
