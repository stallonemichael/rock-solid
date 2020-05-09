import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import projectsReducer from './projects/projects.reducer';

export default combineReducers({
  directory: directoryReducer,
  projects: projectsReducer,
});
