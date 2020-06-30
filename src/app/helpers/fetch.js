import axios from 'axios';
import store from '../../model/Store';
import {gameActions} from '../../model/actions';

const getGame = (url, name) =>
  axios.post(`http://game.bons.me/api/games?name`, {name}).then(res => {
    const {data} = res;
    store.dispatch(gameActions.setGameData(data));
  });

const getPlayer = () => {};

export {getGame, getPlayer};
