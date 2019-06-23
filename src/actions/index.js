import trees from '../apis/trees';
// import history from '../history';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {
  FETCH_TREES,
  FETCH_TREE,
  FETCH_TREE_SUCCESS,
  FETCH_TREES_SUCCESS,
  FETCH_TREES_ERROR,
} from './actionTypes';

/** Directory Action Creators */
export const fetchTrees = () => async dispatch => {
  dispatch({ type: FETCH_TREES});
  dispatch(beginAjaxCall());
  try {
    const response = await trees.get('/tree-data');
    // SIMULATING REAL WORLD API CALL
    setTimeout(() => dispatch({ type: FETCH_TREES_SUCCESS, payload: response.data }), 1000);
  }catch (e) {
    console.log('Handle errors here')
    dispatch({ type: FETCH_TREES_ERROR, error: e })
    throw new Error('I crashed!');
  }
};

export const fetchTree = id => async dispatch => {
  const response = await trees.get(`/tree-data/${id}`);

  dispatch({ type: FETCH_TREE_SUCCESS, payload: response.data });
};