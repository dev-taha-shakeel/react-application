import { combineReducers } from 'redux';
import restarauntListReducer from './restarauntListingReducer';
import restarauntDetailReducer from './restarauntDetailsReducer';

const rootReducer = combineReducers({
  restarauntList: restarauntListReducer,
  restarauntDetail: restarauntDetailReducer,
});

export default rootReducer;
