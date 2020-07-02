import React from 'react';

import MenuItem from '../menu-item/menu-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import {
  DirectoryHeadingContainer,
  DirectoryMenuContainer,
} from './directory.styled';

const Directory = ({ sections }) => (
  <>
    <DirectoryHeadingContainer>
      Let Us design your next project
    </DirectoryHeadingContainer>
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  </>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
