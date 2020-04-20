import {types }from '../actions/index';

const {MAP_GET_START, MAP_GET_SUCCESS, MAP_GET_FAILURE} = types;

const charState = {
  playerX: 0,
  playerY: 0,
  playerMap: []
};

const charReducer = (state = charState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
}

export default charReducer;
