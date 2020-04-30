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
    props.getMap(props.userid)

  }, [])
  return (
    <>
      <button onClick={() => props.generateMap(props.userid)}>Generate</button>
    <button onClick={() => props.getMap(props.userid)}>GetMap</button>
     { props.maps.map(n => (<div>{n.mapid}</div>))}

    </>
  );
};
const mapStateToProps = state => {
  return {
    maps: state.charReducer.playerMap,
    username: state.authReducer.user,
    userid: state.authReducer.userid,
  };
};

export default connect(
  mapStateToProps,
  { generateMap, getMap, getUserInfo}
)(Display);
