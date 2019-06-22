import trees from '../apis/trees';
// import history from '../history';
import {
  FETCH_TREE,
  FETCH_TREES
} from './actionTypes';

/** Directory Action Creators */
export const fetchTrees = () => async dispatch => {
  const response = await trees.get('/tree-data');

  dispatch({ type: FETCH_TREES, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await trees.get(`/tree-data/${id}`);

  dispatch({ type: FETCH_TREE, payload: response.data });
};