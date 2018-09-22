import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const defaultState = {
  data: { songs: {}, loading: true },
  auth: { user: null, loading: true },
};

const middleware = [thunk];

export default createStore(
  rootReducer,
  defaultState,
  applyMiddleware(...middleware)
);
