import React from 'react';

import './project-item.scss';

const ProjectItem = ({ id, imageUrl }) => (
  <div className='project-item'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
  </div>
);

export default ProjectItem;
