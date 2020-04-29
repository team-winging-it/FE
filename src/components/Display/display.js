import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { generateMap, getMap} from '../../actions/charActions';
import {getUserInfo} from '../../actions/authActions'
import axios from 'axios';

const Display = (props) => {
  console.log(props);
  const token = localStorage.getItem('token');
  console.log(props.playerMap)
  useEffect(() => {
    props.getUserInfo(props.username)

  }, [])

  // return (
  //   <button
  //     onClick={() =>
  //       axios({
  //         method: 'GET',
  //         url: 'http://localhost:9000/users/test',
  //         headers: {
  //           Authorization: token
  //         }
  //       })
  //         .then(res => {
  //           // Mixpanel.track('Register Success');
  //           console.log('RES DATA', res);
  //           // dispatch({ type: MAP_GET_SUCCESS, payload: res.data });
  //         })
  //         .catch(err => {
  //           // Mixpanel.track('Login Failed');
  //           // dispatch({ type: MAP_GET_FAILURE, payload: err });
  //         })
  //     }
  //   >
  //     testButton
  //   </button>
  // );

  return (
    <>
      <button onClick={() => props.generateMap()}>Generate</button>
      <button onClick={() => props.getMap()}>GetMap</button>
    </>
  );
};
const mapStateToProps = state => {
  return {
    maps: state.charReducer.playerMap,
    username: state.authReducer.user,
  };
};

export default connect(
  mapStateToProps,
  { generateMap, getMap, getUserInfo}
)(Display);
