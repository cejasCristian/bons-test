import axios from 'axios';
import store from '../../model/Store';
import {gameActions, playerActions, monsterActions, cardActions} from '../../model/actions';

const getGame = async name => {
  await axios.post(`http://game.bons.me/api/games?name`, {name}).then(res => {
    const {data} = res;
    store.dispatch(gameActions.setGameData(data));
  });
};

const getPlayer = async gameID => {
  await axios(`http://game.bons.me/api/games/${gameID}/player`).then(res => {
    const {data} = res;
    store.dispatch(playerActions.setPlayerData(data));
  });
};

const getMonster = async gameID => {
  await axios(`http://game.bons.me/api/games/${gameID}/monster`).then(res => {
    const {data} = res;
    store.dispatch(monsterActions.setMonsterData(data));
  });
};

const getCards = async playerID => {
  await axios(`http://game.bons.me/api/players/${playerID}/cards`).then(res => {
    const {data} = res;
    store.dispatch(cardActions.setCardData(data));
  });
};

const getNextTurn = async (gameID, cardID = '') => {
  await axios.post(`http://game.bons.me/api/games/${gameID}/next-turn`, {card: cardID}).then(res => {
    const {data} = res;
    store.dispatch(gameActions.setGameData(data.game));
    store.dispatch(gameActions.setMonsterEffect(data.monsterEffect));
  });
};

export {getGame, getPlayer, getMonster, getCards, getNextTurn};

// : await axios.post(`http://game.bons.me/api/games/${gameID}/next-turn`).then((res) => {
//     const { data } = res;
//     console.log('Data from getGame: ', data);

//     store.dispatch(gameActions.getNextTurn(data.game));
//   });
