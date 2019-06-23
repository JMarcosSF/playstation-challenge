import _ from 'lodash';
import initialState from './initialState';
import {
  FETCH_TREES,
  FETCH_TREE_SUCCESS,
  FETCH_TREES_SUCCESS,
  FETCH_TREES_ERROR,
} from "../actions/actionTypes";

export default (state = initialState.trees, action) => {
  switch (action.type) {
    case FETCH_TREES_SUCCESS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    // case FETCH_TREES_ERROR:
    //   return { ...state, action.payload}
    default:
      return state;
  }
};