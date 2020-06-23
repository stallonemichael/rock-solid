import ProjectsActionTypes from './projects.types';
/* 
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'; */

export const fetchCollectionsStart = () => ({
  type: ProjectsActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ProjectsActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ProjectsActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

/* reduc-thunk function */
/* export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
}; */
