import {
  getRestarauntDetailsInit,
  getRestarauntDetailsSuccess,
  getRestarauntDetailsFail,
} from '../actions';

import {
  restarauntDetails,
} from '../../mocks/restarauntMockDetails';

const getRestarauntDetailsSource = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(getRestarauntDetailsInit());
    setTimeout(() => {
      if (restarauntDetails) {
        dispatch(getRestarauntDetailsSuccess(restarauntDetails));
        resolve();
      } else {
        dispatch(getRestarauntDetailsFail('Something unexpected happened'));
        reject('Something unexpected happened');
      }
    }, 2000);
  });
};

export default getRestarauntDetailsSource;
