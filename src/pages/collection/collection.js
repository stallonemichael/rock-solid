import React from 'react';
import { connect } from 'react-redux';

import ProjectItem from '../../components/project-item/project-item';

import { selectCollection } from '../../redux/projects/projects.selectors';

import { CollectionPageContainer, Title, Items } from './collection.styled';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title.toUpperCase()}</Title>
      <Items>
        {items.map((item) => (
          <ProjectItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
