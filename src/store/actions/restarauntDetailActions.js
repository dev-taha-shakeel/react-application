import getRestarauntDetailsSource from '../sources/restarauntDetailsSource'; // eslint-disable-line
import * as types from '../actionTypes';

export const getRestarauntDetailsInit = () => ({
  type: types.FETCH_RESTARAUNT_DETAIL_INIT,
});

export const getRestarauntDetailsSuccess = data => ({
  type: types.FETCH_RESTARAUNT_DETAIL_SUCCESS,
  data,
});

export const getRestarauntDetailsFail = data => ({
  type: types.FETCH_RESTARAUNT_DETAIL_FAIL,
  data,
});

// Async API call to fetch data (mocks)
export const getRestarauntDetails = (id) => getRestarauntDetailsSource(id);
