import { createSelector } from 'reselect';

const selectProjects = (state) => state.projects;

export const selectCollections = createSelector(
  [selectProjects],
  (projects) => projects.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections
      ? Object.keys(collections)
          .sort()
          .map((key) => collections[key])
      : []
);
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectProjects],
  (projects) => projects.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectProjects],
  (projects) => !!projects.collections
);
