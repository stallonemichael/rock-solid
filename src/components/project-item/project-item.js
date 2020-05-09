import React from 'react';

import './project-item.scss';

const ProjectItem = ({ item }) => {
  const { imageUrl } = item;
  return (
    <div className='project-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    </div>
  );
};

export default ProjectItem;
