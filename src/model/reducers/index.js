import {combineReducers} from 'redux';
import getGameData from './game.reducer';
import getPlayerData from './player.reducer';
import getMonsterData from './monster.reducer';
import getCardData from './card.reducer';

const rootReducer = combineReducers({
  getGameData,
  getPlayerData,
  getMonsterData,
  getCardData
});

export default rootReducer;
