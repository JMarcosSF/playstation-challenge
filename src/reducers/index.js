import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import authReducer from './AuthReducer';
import trees from './TreeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer'

export default combineReducers({
  trees,
  ajaxCallsInProgress,
})