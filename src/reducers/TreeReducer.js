import _ from 'lodash';
import {
  FETCH_TREE,
  FETCH_TREES,
} from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TREE:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_TREES:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    default:
      return state;
  }
};