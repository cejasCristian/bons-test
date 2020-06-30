import {player} from '../constants';

const initialState = {
  playerData: {}
};

export const getPlayerData = (state = initialState, action) => {
  switch (action.type) {
    case player.SET_PLAYERDATA:
      return {...state, playerData: action.data};
    default:
      return {...state};
  }
};

export default getPlayerData;
