import {
  getRestarauntListInit,
  getRestarauntListSuccess,
  getRestarauntListFail,
  updateRestarauntInit,
  updateRestarauntSuccess,
  updateRestarauntFail,
} from '../actions';

import {
  restaraunts,
} from '../../mocks/restarauntMockListing';

import { existInLocal, getFromLocal, saveToLocal } from '../../utils/storageUtils/cache'

const getRestarauntListSource = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(getRestarauntListInit());
    setTimeout(() => {
      if (restaraunts) {
        dispatch(getRestarauntListSuccess(restaraunts));
        console.log('loca', getFromLocal('restarauntList'));
        resolve();
      } else {
        dispatch(getRestarauntListFail('Something unexpected happened'));
        reject();
      }
    }, 2000);
  });
};

export const updateRestarauntSource = (restaraunt) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(updateRestarauntInit());
    let restarauntInCache = null;
    if(existInLocal('restarauntList')) {
      restarauntInCache = getFromLocal('restarauntList');
    }
    if (restaraunt) {
      dispatch(updateRestarauntSuccess(restaraunt));
      restarauntInCache = restaraunt.slice();
      saveToLocal(restarauntInCache, 'restarauntList');
      resolve();
    } else {
      dispatch(updateRestarauntFail('Something unexpected happened'));
      reject('Something unexpected happened');
    }
  });
}

export default getRestarauntListSource;
