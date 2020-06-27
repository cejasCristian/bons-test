import {game} from '../constants';

const initialState = {
  gameData: {}
};

export const getGameData = (state = initialState, action) => {
  switch (action.type) {
    case game.SET_GAMEDATA:
      return {...state, gameData: action.data};
    default:
      return {...state};
  }
};

export default getGameData;
