import React from 'react';
import { connect } from 'react-redux';


const gameDisplay = (props) =>
{



  return(
      <div></div>
  )



}


const mapStateToProps = state => {
  return {
    maps: state.charReducer.playerMap,
    playerX: state.charReducer.playerX,
    playerY: state.charReducer.playerY,
  };
}

export default connect( mapStateToProps, null, (gameDisplay));