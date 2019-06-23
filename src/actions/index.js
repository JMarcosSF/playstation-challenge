import trees from '../apis/trees';
// import history from '../history';
import {
  FETCH_TREES,
  FETCH_TREE,
  FETCH_TREE_SUCCESS,
  FETCH_TREES_SUCCESS,
  FETCH_TREES_ERROR, AJAX_CALL_ERROR,
} from './actionTypes';

/** Directory Action Creators */
export const fetchTrees = () => async dispatch => {
  dispatch({ type: FETCH_TREES});
  try {
    const response = await trees.get('/tree-data');
    // SIMULATING REAL WORLD API CALL
    setTimeout(() => dispatch({ type: FETCH_TREES_SUCCESS, payload: response.data }), 1000);
  }catch (e) {
    dispatch({ type: FETCH_TREES_ERROR })
  }
};

export const fetchTree = id => async dispatch => {
  const response = await trees.get(`/tree-data/${id}`);

  dispatch({ type: FETCH_TREE_SUCCESS, payload: response.data });
};