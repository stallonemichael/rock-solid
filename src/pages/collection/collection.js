import React from 'react';
import { connect } from 'react-redux';

import ProjectItem from '../../components/project-item/project-item';

import { selectCollection } from '../../redux/projects/projects.selectors';

import './collection.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='items'>
        {items.map((item) => (
          <ProjectItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
