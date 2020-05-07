import { types } from '../actions/index';

const {
  MAP_GET_START,
  MAP_GET_SUCCESS,
  MAP_GET_FAILURE,
  MAP_GEN_START,
  MAP_GEN_SUCCESS,
  MAP_GEN_FAILURE,
  SET_MAPID_SUCCESS,
  SET_MAPID_START,
} = types;

const charState = {
  playerX: 0,
  playerY: 0,
  playerMap: [{}],
  error: '',
  isLoading: false,
  isSuccess: false,
  mapId: 0,
};

const charReducer = (state = charState, { type, payload }) => {
  console.log(type)
  switch (type) {
    case MAP_GET_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case MAP_GET_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        playerMap: payload,
        isSuccess: true
      };
    case MAP_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case MAP_GEN_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    // case MAP_GEN_SUCCESS:
    //   return {
    //     ...state,
    //     error: '',
    //     isLoading: false,
    //     playerMap: payload,
    //     isSuccess: true
    //   };
    case MAP_GEN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case SET_MAPID_START:
      console.log("IT STARTED")
      return{
        ...state,
        isLoading: true,
        error: payload,
      };
    case SET_MAPID_SUCCESS:
      debugger
      console.log("WHY NO WORK", payload)
      return{
        ...state,
        mapId: payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default charReducer;
