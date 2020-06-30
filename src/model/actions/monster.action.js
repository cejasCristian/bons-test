import {monster} from '../constants';

const setMonsterData = (data = {}) => ({type: monster.SET_MONSTERDATA, data});

export const monsterActions = {
  setMonsterData
};

export default monsterActions;
