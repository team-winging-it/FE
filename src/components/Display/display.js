import React from 'react';
import { connect } from 'react-redux';
import { generateMap } from '../../actions/charActions';
import axios from 'axios';

const Display = props => {
  console.log(typeof generateMap());
  const token = localStorage.getItem('token');

  return (
    <button
      onClick={() =>
        axios({
          method: 'GET',
          url: 'http://localhost:9000/users/test',
          headers: {
            Authorization: token
          }
        })
          .then(res => {
            // Mixpanel.track('Register Success');
            console.log('RES DATA', res);
            // dispatch({ type: MAP_GET_SUCCESS, payload: res.data });
          })
          .catch(err => {
            // Mixpanel.track('Login Failed');
            // dispatch({ type: MAP_GET_FAILURE, payload: err });
          })
      }
    >
      testButton
    </button>
  );
};

export default connect(
  null,
  { generateMap }
)(Display);
