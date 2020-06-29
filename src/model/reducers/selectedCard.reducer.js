import {selectedCard} from '../constants';

const initialState = {
  selectedCardData: ''
};

export const getSelectedCardData = (state = initialState, action) => {
  switch (action.type) {
    case selectedCard.SET_SELECTEDCARD:
      return {...state, selectedCardData: action.data};
    default:
      return {...state};
  }
};

export default getSelectedCardData;
