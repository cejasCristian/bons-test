import {alert as alertConstant} from '../constants';

const alert = data => ({type: alertConstant.SET_ALERT, data});

export const alertAction = {
  alert
};

export default alertAction;
