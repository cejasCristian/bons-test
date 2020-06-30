import {game} from '../constants';

const initialState = {
  gameData: {},
  monsterEffect: {effect: ''}
};

export const getGameData = (state = initialState, action) => {
  switch (action.type) {
    case game.SET_GAMEDATA:
      return {...state, gameData: action.data};
    case game.SET_MONSTEREFFECT:
      return {...state, monsterEffect: action.data};
    default:
      return {...state};
  }
};

export default getGameData;
