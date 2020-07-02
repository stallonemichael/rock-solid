import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryLight};
  color: white;
  list-style: none;
  text-transform: capitalize;

  @media screen and (min-width: 530px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: unset;
  }
`;

export const QuickLinksContainer = styled.section`
  margin: 8px 0 8px 0;
  @media screen and (min-width: 530px) {
    width: 33.3%;
    text-align: center;
  }
`;

export const QuickLinksTitle = styled.h3`
  font-size: 1.5rem;
  @media screen and (min-width: 850px) {
    font-size: 1.7rem;
  }
`;

export const Links = styled(Link)`
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  color: white;
  &:hover {
    color: lightgray;
  }
  @media screen and (min-width: 530px) {
    font-size: 1.3rem;
  }
`;

export const ProjectLinksContainer = styled.section`
  margin: 8px 0 8px 0;
  @media screen and (min-width: 530px) {
    width: 33.3%;
    text-align: center;
  }
`;

export const ProjectLinksTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  @media screen and (min-width: 850px) {
    font-size: 1.7rem;
  }
`;

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 0 8px 0;
  @media screen and (min-width: 530px) {
    width: 33.3%;
    text-align: center;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 1.5rem;
  @media screen and (min-width: 850px) {
    font-size: 1.7rem;
  }
`;

export const PhoneNumber = styled.a`
  font-size: 1.1rem;
  color: white;
  &:hover {
    color: lightgray;
  }
  @media screen and (min-width: 530px) {
    font-size: 1.3rem;
  }
`;

export const Divider = styled.div`
  height: 5px;
  width: 90%;
  display: flex;
  align-items: center;
  border-top: 1px solid white;
  margin-top: 10px;
`;

export const Copyright = styled.div`
  font-size: 1.3rem;
  margin-bottom: 8px;
  @media screen and (min-width: 530px) {
    font-size: 1.3rem;
    align-items: center;
  }
`;
