import ProjectsActionTypes from './projects.types';

const INITIAL_STATE = {
  collections: null,
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectsActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
