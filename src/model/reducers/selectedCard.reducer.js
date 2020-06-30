import {selectedCard} from '../constants';

const initialState = {
  cardData: ''
};

export const selectedCardData = (state = initialState, action) => {
  switch (action.type) {
    case selectedCard.SET_SELECTEDCARD:
      return {...state, cardData: action.data};
    default:
      return {...state};
  }
};

export default selectedCardData;
