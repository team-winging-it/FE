import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { setMapId, movePlayer, getPlayerLocation} from "../../actions/charActions";


const GameDisplay = (props) =>
{
  const [grid, setGrid] = useState([])
  const [gridId, setGridId] = useState()
  const [player, setPlayer] = useState({
    playerx: 33,
    playery:33,
  })
  console.log("display", props)

  function selectMap() {
    for (let i = 0; i < props.maps.length; i++) {
      if (props.maps[i].mapid === props.mapid) {
        props.setMapId(props.mapid)

        console.log("I have been clicked")

      }
    }
  }

  useEffect(() => {
    selectMap()

  }, [])




  return(
      <>
      <div>{props.mapid}</div>
        <button onClick={ () => {props.getPlayerLocation(props.playerMapId)}}>Geting player location</button>
        <button onClick={ () => {props.movePlayer(player, props.playerMapId)}}>Testing player movement</button>

        </>

  )



}


const mapStateToProps = state => {
  return {
    maps: state.charReducer.playerMap,
    playerX: state.charReducer.playerX,
    playerY: state.charReducer.playerY,
    playerMapId: state.charReducer.mapId,
  };
}

export default connect( mapStateToProps, {setMapId, movePlayer, getPlayerLocation}, )(GameDisplay);