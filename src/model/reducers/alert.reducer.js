import {alert} from '../constants';

const initialState = {
  alert: false
};

export const getAlert = (state = initialState, action) => {
  switch (action.type) {
    case alert.SET_ALERT:
      return {...state, alert: action.data};
    default:
      return {...state};
  }
};

export default getAlert;
