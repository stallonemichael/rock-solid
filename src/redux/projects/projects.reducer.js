import PROJECTS_DATA from './projects.data';

const INITIAL_STATE = {
  collections: PROJECTS_DATA,
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
