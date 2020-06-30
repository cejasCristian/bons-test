import {game} from '../constants';

const setGameData = (data = {}) => ({type: game.SET_GAMEDATA, data});
const setMonsterEffect = (data = {}) => ({type: game.SET_MONSTEREFFECT, data});

export const gameActions = {
  setGameData,
  setMonsterEffect
};

export default gameActions;
