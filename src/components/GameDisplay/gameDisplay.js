import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { setMapId, movePlayer, getPlayerLocation} from "../../actions/charActions";
import Keypad from "../Keypad/keypad";


const GameDisplay = (props) =>
{
  const [grid, setGrid] = useState([])
  const [gridId, setGridId] = useState()
  const [player, setPlayer] = useState({
    x: 31,
    y:31,
  })
  const[gridWidth, setGridWidth] = useState();
  const[gridHeight, setGridHeight] = useState();



  function selectMap() {
    for (let i = 0; i < props.maps.length; i++) {
      if (props.maps[i].mapid === props.mapid) {
        props.setMapId(props.mapid)
        setGrid(props.maps[i])
        console.log("use grid", grid);
        setGridWidth(props.maps[i].width)
        setGridHeight(props.maps[i].height)


      }
    }
  }

  useEffect(() => {
    selectMap()

  }, [])

  const displayGrid = []


  for (let i = 0; i <= gridHeight; i++){
    const row = [];
    for (let j = 0; j < grid.grid.length; j++) {
      if (grid.grid[j].y === i) {
        row.push(grid.grid[j])
      }
    }
    displayGrid.push(row);
  }
console.log("DisplayGird", displayGrid);
console.log("grid", grid)
  console.log("props isloading", props.isLoading)
  return(
      <>
      {/*<div>{props.mapid}</div>*/}
      {/*  <button onClick={ () => {props.getPlayerLocation(props.playerMapId)}}>Geting player location</button>*/}
      {/*  <button onClick={ () => {props.movePlayer(player, props.playerMapId)}}>Testing player movement</button>*/}

        { grid.grid !== undefined ? (grid.grid.map(row => (
            <div style={{ height: 22 }}>
              {row.map(cell => {
                let color = '';
                if (cell.roomType === 'Floor') {
                  color = 'brown';
                }
                if (cell.roomType === 'Door') {
                  color = 'gray';
                }
                if (cell.roomType === 'Wall') {
                  color = 'black';
                }
                if (cell.x === player.x && cell.y === player.y) {
                  color = 'yellow';
                }
                return (
                    <div
                        style={{
                          backgroundColor: color,
                          width: 22,
                          height: 22,
                          display: 'inline-block'
                        }}
                    />
                );
              })}
            </div>
        ))

        ):(<div>Loading</div>)}
        <div>
          <Keypad />
        </div>
        </>



);

}


const mapStateToProps = state => {
  return {
    maps: state.charReducer.playerMap,
    playerX: state.charReducer.playerX,
    playerY: state.charReducer.playerY,
    playerMapId: state.charReducer.mapId,
    isLoading: state.charReducer.isLoading
  };
}

export default connect( mapStateToProps, {setMapId, movePlayer, getPlayerLocation}, )(GameDisplay);