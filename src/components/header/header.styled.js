import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primaryLight};
  margin-left: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  text-decoration: none;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 550px) {
    display: flex;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  color: ${({ theme }) => theme.primaryLight};
  font-weight: 600;
  letter-spacing: 2px;
`;
