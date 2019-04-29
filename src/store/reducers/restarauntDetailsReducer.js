import * as types from '../actionTypes';
import {
  restarauntDetailInitialState,
} from './initialState';

export default function restarauntDetailReducer(state = restarauntDetailInitialState, action) {
  switch (action.type) {
    case types.FETCH_RESTARAUNT_DETAIL_INIT: {
      return Object.assign({}, state, {
        details: null,
        isLoading: true,
        isError: false,
        error: ''
      });
    }
    case types.FETCH_RESTARAUNT_DETAIL_SUCCESS: {
      return Object.assign({}, state, {
        details: action.data,
        isLoading: false,
        isError: false,
        error: ''
      });
    }
    case types.FETCH_RESTARAUNT_DETAIL_FAIL: {
      return Object.assign({}, state, {
        details: null,
        isLoading: false,
        isError: true,
        error: action.data,
      });
    }
    default:
      return state;
  }
}
