import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
}


const store = createStore(reducers, applyMiddleware(thunk));