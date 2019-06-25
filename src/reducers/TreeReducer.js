import {
  FETCH_TREES,
  FETCH_TREES_SUCCESS,
  FETCH_TREES_ERROR,
} from "../actions/actionTypes";

export default (state = {nodes: [], isFetching: false, errorMessage: ''}, action) => {
  switch (action.type) {
    case FETCH_TREES:
      return { ...state, isFetching: true}
    case FETCH_TREES_SUCCESS:
      return { ...state, nodes: action.payload, isFetching: false };
    case FETCH_TREES_ERROR:
      return { ...state, errorMessage: 'Failed To Load Tree Data From API', isFetching: false }
    default:
      return state;
  }
};