import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../store/reducers/rootReducer';
import { existInLocal, getFromLocal } from '../utils/storageUtils/cache';
import {
  restarauntListingInitialState,
  restarauntDetailInitialState,
} from '../store/reducers/initialState';
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
  let restarauntList = restarauntListingInitialState;
  let restarauntDetail = restarauntDetailInitialState;

  if (existInLocal('restarauntList')) {
    restarauntList.restaraunts = getFromLocal('restarauntList');
  }
  if (existInLocal('restarauntDetail')) {
    restarauntDetail.details = getFromLocal('restarauntDetail');
  }

  return {
    restarauntList,
    restarauntDetail,
  };
}

const persistedState = checkAndRestoreFromLocal();

const store = createStore(
  rootReducer,
  persistedState,
  enhancer,
);

export default store;
