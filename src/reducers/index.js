import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import authReducer from './AuthReducer';
import treeReducer from './TreeReducer';

export default combineReducers({
  trees: treeReducer,
})