import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ProjectsOverviewContainer from '../../components/projects-overview/projects-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import Footer from '../../components/footer/footer';

import { fetchCollectionsStart } from '../../redux/projects/projects.actions';

class ProjectsPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={ProjectsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ProjectsPage);
