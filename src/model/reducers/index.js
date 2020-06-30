import {combineReducers} from 'redux';
import getGameData from './game.reducer';
import getPlayerData from './player.reducer';
import getMonsterData from './monster.reducer';
import getCardData from './card.reducer';
import selectedCardData from './selectedCard.reducer';
import getAlert from './alert.reducer';

const rootReducer = combineReducers({
  getGameData,
  getPlayerData,
  getMonsterData,
  getCardData,
  selectedCardData,
  getAlert
});

export default rootReducer;
