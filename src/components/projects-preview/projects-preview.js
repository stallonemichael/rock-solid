import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  ProjectsPreviewContainer,
  Title,
  PreviewContainer,
} from './projects-preview.styled';

import ProjectItem from '../project-item/project-item';

const ProjectsPreview = ({ title, items, history, match, routeName }) => (
  <ProjectsPreviewContainer>
    <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </Title>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <ProjectItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </ProjectsPreviewContainer>
);

export default withRouter(ProjectsPreview);
