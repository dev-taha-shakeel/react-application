import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../store/reducers/rootReducer';
import { existInLocal, getFromLocal } from '../utils/storageUtils/cache';
// import { saveState, loadState } from 'utils/storageUtils';
// import * as userState from './reducers/userReducer';
// import * as tokenState from './reducers/tokenReducer';
// import * as registrationState from './reducers/registrationReducer';


const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const middleware = [thunk];
// Put condition to not use logger in production
middleware.push(createLogger());

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

function checkAndRestoreFromLocal() {
  // Name should be same as those of the reducers
  // let user = userState.initialState;
  // let token = tokenState.initialState;
  // let registration = registrationState.initialState;
  // if (existInLocal('user')) {
  //   user = Object.assign({}, user, getFromLocal('user', true, true));
  // }
  // if (existInLocal('adminToken')) {
  //   token = Object.assign({}, token, getFromLocal('adminToken'));
  // }
  // if (existInLocal('token')) {
  //   token = Object.assign({}, token, getFromLocal('token'));
  // }
  // if (existInLocal('register')) {
  //   registration = Object.assign({}, registration, getFromLocal('register', true, true));
  // }
  return {
    // user,
    // token,
    // registration,
  };
}

const persistedState = checkAndRestoreFromLocal();

const store = createStore(
  rootReducer,
  persistedState,
  enhancer,
);

export default store;
