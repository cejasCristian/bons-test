import {monster} from '../constants';

const initialState = {
  monsterData: {}
};

export const getMonsterData = (state = initialState, action) => {
  switch (action.type) {
    case monster.SET_MONSTERDATA:
      return {...state, monsterData: action.data};
    default:
      return {...state};
  }
};

export default getMonsterData;
