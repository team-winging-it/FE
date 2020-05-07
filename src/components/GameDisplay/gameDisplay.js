import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { setMapId} from "../../actions/charActions";


const GameDisplay = (props) =>
{
  const [grid, setGrid] = useState([])
  const [gridId, setGridId] = useState()
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
        {/*<button onClick={ () => {selectMap()}}>clickme</button>*/}
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

export default connect( mapStateToProps, {setMapId}, )(GameDisplay);