import {selectedCard} from '../constants';

const setSelectedCard = (data = '') => ({type: selectedCard.SET_SELECTEDCARD, data});

export const selectedCardActions = {
  setSelectedCard
};

export default selectedCardActions;
