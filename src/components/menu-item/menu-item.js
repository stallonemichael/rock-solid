import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  TitleContainer,
} from './menu-item.styled';

const MenuItem = ({
  title,
  imageUrl,
  linkUrl,
  imageNumber,
  history,
  match,
}) => (
  <MenuItemContainer
    className={`menu-item-${imageNumber}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer imageUrl={imageUrl} />
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
