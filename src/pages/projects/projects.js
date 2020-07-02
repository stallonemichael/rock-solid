import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ProjectsOverviewContainer from '../../components/projects-overview/projects-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import Footer from '../../components/footer/footer';

import { fetchCollectionsStart } from '../../redux/projects/projects.actions';

const ProjectsPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <>
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
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ProjectsPage);
