import React from 'react';

import './projects-preview.scss';
import ProjectItem from '../project-item/project-item';

const ProjectsPreview = ({ title, items }) => (
  <div className='projects-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <ProjectItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default ProjectsPreview;
