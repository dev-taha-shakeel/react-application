import * as types from '../actionTypes';
import {
  restarauntListingInitialState,
} from './initialState';

export default function restarauntListReducer(state = restarauntListingInitialState, action) {
  switch (action.type) {
    case types.FETCH_RESTARAUNTS_INIT: {
      return Object.assign({}, state, {
        restaraunts: null,
        isLoading: true,
        isError: false,
        error: ''
      });
    }
    case types.FETCH_RESTARAUNTS_SUCCESS: {
      return Object.assign({}, state, {
        restaraunts: action.data,
        isLoading: false,
        isError: false,
        error: ''
      });
    }
    case types.FETCH_RESTARAUNTS_FAIL: {
      return Object.assign({}, state, {
        restaraunts: null,
        isLoading: false,
        isError: true,
        error: action.data
      });
    }
    case types.UPDATE_RESTARAUNT_INIT: {
      return Object.assign({}, state, {
        restaraunts: state.restaraunts,
        isLoading: true,
        isError: false,
        error: '',
      });
    }
    case types.UPDATE_RESTARAUNT_SUCCESS: {
      return Object.assign({}, state, {
        restaraunts: action.data,
        isLoading: false,
        isError: false,
        error: '',
      });
    }
    case types.UPDATE_RESTARAUNT_FAIL: {
      return Object.assign({}, state, {
        isLoading: false,
        isError: true,
        error: action.data,
      });
    }
    default:
      return state;
  }
}
