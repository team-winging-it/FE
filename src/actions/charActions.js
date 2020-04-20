import axios from 'axios';
import axiosWithAuth from '../utilities/axiosWithAuth';
import { ERROR, types } from './index';

const {
  MOVE_START,
  MOVE_SUCCESS,
  MOVE_FAILURE,
  MAP_GEN_START,
  MAP_GEN_SUCCESS,
  MAP_GEN_FAILURE,
  MAP_GET_START,
  MAP_GET_FAILURE,
  MAP_GET_SUCCESS
} = types;

export const generateMap = () => {
  console.log('BUTTON was pressed');
  const token = localStorage.getItem('token');

  return dispatch => {
    dispatch({ type: MAP_GEN_START });
    return axios({
      method: 'GET',
      url: 'http://localhost:9000/users/test',
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        // Mixpanel.track('Register Success');
        console.log('RES DATA', res);
        dispatch({ type: MAP_GEN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        // Mixpanel.track('Login Failed');
        dispatch({ type: MAP_GEN_FAILURE, payload: err });
      });
  };
};
export const getMap = () => {
  console.log('BUTTON was pressed');
  const token = localStorage.getItem('token');

  return dispatch => {
    dispatch({ type: MAP_GET_START });
    return axios({
      method: 'GET',
      url: 'http://localhost:9000/users/getmap',
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        // Mixpanel.track('Register Success');
        console.log('RES DATA', res);
        dispatch({ type: MAP_GET_SUCCESS, payload: res.data });
      })
      .catch(err => {
        // Mixpanel.track('Login Failed');
        dispatch({ type: MAP_GET_FAILURE, payload: err });
      });
  };
};
