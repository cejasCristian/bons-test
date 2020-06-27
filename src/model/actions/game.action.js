import {game} from '../constants';

const setGameData = (data = {}) => ({type: game.SET_GAMEDATA, data});

export const gameActions = {
  setGameData
};

export default gameActions;
