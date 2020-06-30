import {card} from '../constants';

const initialState = {
  cardData: []
};

export const getCardData = (state = initialState, action) => {
  switch (action.type) {
    case card.SET_CARDDATA:
      return {...state, cardData: action.data};
    default:
      return {...state};
  }
};

export default getCardData;
