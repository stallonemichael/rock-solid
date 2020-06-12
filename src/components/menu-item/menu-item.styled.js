import styled, { keyframes } from 'styled-components';

const fadeInImage = keyframes`
  0%{
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
`;

export const MenuItemContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 8px;

  @media screen and (min-width: 530px) {
    display: block;
    width: 50%;
    height: 300px;
    padding: 16px 12px;
  }

  @media screen and (min-width: 850px) {
    height: 100%;
    display: block;
    width: 100%;
    margin-bottom: 8px;
    padding: 0;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
      animation: ${fadeInImage} 1s;
    }
    &.menu-item-1 {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 6;
    }
    &.menu-item-2 {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 5;
    }
    &.menu-item-3 {
      grid-column-start: 9;
      grid-column-end: 13;
      grid-row-start: 1;
      grid-row-end: 6;
    }
    &.menu-item-4 {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 6;
      grid-row-end: 9;
    }
    &.menu-item-5 {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 5;
      grid-row-end: 10;
    }
    &.menu-item-6 {
      grid-column-start: 9;
      grid-column-end: 13;
      grid-row-start: 6;
      grid-row-end: 11;
    }
    &.menu-item-7 {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 9;
      grid-row-end: 15;
    }
    &.menu-item-8 {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 10;
      grid-row-end: 15;
    }
    &.menu-item-9 {
      grid-column-start: 9;
      grid-column-end: 13;
      grid-row-start: 11;
      grid-row-end: 15;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 1;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const TitleContainer = styled.div`
  display: flex;
  font-size: 22px;
  opacity: 1;
  font-weight: 600;
`;
