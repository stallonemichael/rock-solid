import React from 'react';
import { withRouter } from 'react-router-dom';

import PROJECTS_DATA from './projects.data';
import ProjectsPreview from '../../components/projects-preview/projects-preview';

import './projects.scss';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: PROJECTS_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='projects'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <ProjectsPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default withRouter(ProjectsPage);
