import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import authReducer from './AuthReducer';
import treeData from './TreeReducer';

export default combineReducers({
  treeData,
})