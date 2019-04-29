import getRestarauntListSource, { updateRestarauntSource } from '../sources/restarauntListingSource'; // eslint-disable-line
import * as types from '../actionTypes';

export const getRestarauntListInit = () => ({
  type: types.FETCH_RESTARAUNTS_INIT,
});

export const getRestarauntListSuccess = data => ({
  type: types.FETCH_RESTARAUNTS_SUCCESS,
  data,
});

export const getRestarauntListFail = data => ({
  type: types.FETCH_RESTARAUNTS_FAIL,
  data,
});

export const updateRestarauntInit = () => ({
  type: types.UPDATE_RESTARAUNT_INIT,
});

export const updateRestarauntSuccess = data => ({
  type: types.UPDATE_RESTARAUNT_SUCCESS,
  data,
});

export const updateRestarauntFail = data => ({
  type: types.UPDATE_RESTARAUNT_FAIL,
  data,
});

// Async API call to fetch data (mocks)
export const getRestarauntList = () => getRestarauntListSource();
export const updateRestaraunt = (restaraunt) => updateRestarauntSource(restaraunt);
