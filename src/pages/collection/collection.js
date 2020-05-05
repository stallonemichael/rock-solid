import React from 'react';

import './collection.scss';

import ProjectItem from '../../components/project-item/project-item';

const CollectionPage = ({ items }) => {
  return (
    <div className='collection-page'>
      <div className='title'>Page Title</div>
      <div className='items'>
        {items.map((item) => (
          <ProjectItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
