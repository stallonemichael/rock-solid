import React from 'react';

import { ProjectItemContainer, BackgroundImage } from './project-item.styled';

const ProjectItem = ({ item }) => {
  const { imageUrl } = item;
  return (
    <ProjectItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
    </ProjectItemContainer>
  );
};

export default ProjectItem;
