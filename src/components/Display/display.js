import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { generateMap, getMap} from '../../actions/charActions';
import {getUserInfo} from '../../actions/authActions'
import axios from 'axios';
import { Button } from 'pcln-design-system';
import {Container} from'./displayStyle';

const Display = (props) => {
  console.log("props", props);
  const[ render, setRender] = useState(false)
  const[ mapID, setMapId] = useState();

  const token = localStorage.getItem('token');
  console.log(props.playerMap)
  useEffect(() => {
    props.getUserInfo(props.username)
    props.getMap(props.userid)

  }, [])
  console.log("map State",render)
  return (
    <Container className = "container">
    <h>Load your map</h>
    <div classname = "buttonContainer">
      <Button size='medium'onClick={() => props.generateMap(props.userid)}>Generate</Button>
    <Button size='medium' onClick={() => props.getMap(props.userid)}>GetMap</Button>
    </div>
      <div className="mapContainer">
     { props.maps.map(n => (
         <Button className = "mapButton" variation="outline" color= "black" onClick = { function loadMap(){ setRender(true); setMapId(n.mapid);} }>
           {n.mapid}
         </Button>))}
      </div>
    </Container>
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
