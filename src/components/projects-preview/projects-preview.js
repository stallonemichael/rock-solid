import React from 'react';
import { withRouter } from 'react-router-dom';

import './projects-preview.scss';
import ProjectItem from '../project-item/project-item';

const ProjectsPreview = ({ title, items, history, match, routeName }) => (
  <div className='projects-preview'>
    <h1
      className='title'
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <ProjectItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(ProjectsPreview);
