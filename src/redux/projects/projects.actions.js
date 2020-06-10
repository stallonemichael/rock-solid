import ProjectsActionTypes from './projects.types';

export const updateCollections = (collectionsMap) => ({
  type: ProjectsActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
