import React from 'react';
import { Route } from 'react-router-dom';

import ProjectsOverview from '../../components/projects-overview/projects-overview';
import CollectionPage from '../collection/collection';
import Footer from '../../components/footer/footer';

const ProjectsPage = ({ match }) => (
  <div className='projects'>
    <Route exact path={`${match.path}`} component={ProjectsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    <Footer />
  </div>
);

export default ProjectsPage;
