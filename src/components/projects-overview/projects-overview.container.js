import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/projects/projects.selectors';
import WithSpinner from '../with-spinner/with-spinner';
import ProjectsOverview from './projects-overview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const ProjectsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProjectsOverview);

export default ProjectsOverviewContainer;
