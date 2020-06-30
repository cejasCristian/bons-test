import {card} from '../constants';

const setCardData = (data = []) => ({type: card.SET_CARDDATA, data});

export const cardActions = {
  setCardData
};

export default cardActions;
