import React from 'react';

import DIRECTORY_DATA from './directory.data';
import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: DIRECTORY_DATA
    };
  }

  render() {
    return (
      <div>
        <h1 className='directory-heading'>Let Us design your next project</h1>
        <div className='directory-menu'>
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
