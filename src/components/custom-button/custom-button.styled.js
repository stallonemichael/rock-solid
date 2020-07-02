import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: ${({ theme }) => theme.primaryLight};
  color: white;
  border-color: ${({ theme }) => theme.primaryLight};

  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.primaryLight};
    border-color: ${({ theme }) => theme.primaryLight};
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: ${({ theme }) => theme.primaryLight};
  border: 1px solid white;

  &:hover {
    background-color: ${({ theme }) => theme.primaryLight};
    color: white;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-family: 'Roboto Condensed', sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getButtonStyles}
`;
