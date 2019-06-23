import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import authReducer from './AuthReducer';
import treeData from './TreeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer'

export default combineReducers({
  treeData,
  ajaxCallsInProgress,
})