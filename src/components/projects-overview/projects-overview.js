import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/projects/projects.selectors';
import ProjectsPreview from '../projects-preview/projects-preview';

import { ProjectsOverviewContainer } from './projects-overview.styled';

const ProjectsOverview = ({ collections }) => (
  <ProjectsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <ProjectsPreview key={id} {...otherCollectionProps} />
    ))}
  </ProjectsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ProjectsOverview);
