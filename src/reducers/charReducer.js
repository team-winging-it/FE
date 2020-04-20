import { types } from '../actions/index';

const { MAP_GET_START, MAP_GET_SUCCESS, MAP_GET_FAILURE } = types;

const charState = {
  playerX: 0,
  playerY: 0,
  playerMap: null,
  error: '',
  isLoading: false,
  isSuccess: false
};

const charReducer = (state = charState, { type, payload }) => {
  switch (type) {
    case MAP_GET_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case MAP_GET_SUCCESS:
      return{
        ...state,
        error:'',
        isLoading: false,
        playerMap: payload.grid,
        isSuccess:true
      };
  case  MAP_GET_FAILURE:
      return{
        ...state,
        isLoading:false,
        error:payload
      };
    default:
      return state;
  }
};

export default charReducer;
