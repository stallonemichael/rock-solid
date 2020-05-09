import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/projects/projects.selectors';

import ProjectsPreview from '../projects-preview/projects-preview';

import './projects-overview.scss';

const ProjectsOverview = ({ collections }) => (
  <div className='projects-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <ProjectsPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ProjectsOverview);
