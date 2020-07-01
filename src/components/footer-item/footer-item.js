import React from 'react';
import { withRouter } from 'react-router-dom';

import { Item } from './footer-item.styled';

const FooterItem = ({ title, linkUrl, history }) => (
  <Item onClick={() => history.push(`/${linkUrl}`)}>{title}</Item>
);

export default withRouter(FooterItem);
