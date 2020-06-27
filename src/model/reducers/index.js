import {combineReducers} from 'redux';
import getGameData from './game.reducer';
import getPlayerData from './player.reducer';

const rootReducer = combineReducers({
  getGameData,
  getPlayerData
});

export default rootReducer;
