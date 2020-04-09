import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({
  title,
  imageUrl,
  linkUrl,
  imageNumber,
  history,
  match
}) => (
  <div
    className={`menu-item menu-item-${imageNumber}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='content'>
      <span className='title'>{title.toUpperCase()}</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
