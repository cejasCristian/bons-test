import {player} from '../constants';

const setPlayerData = (data = {}) => ({type: player.SET_PLAYERDATA, data});

export const playerActions = {
  setPlayerData
};

export default playerActions;
