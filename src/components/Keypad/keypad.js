import React ,{useEffect, useState}from "react";
import {connect} from "react-redux";
import {movePlayer, getPlayerLocation} from "../../actions/charActions"








const Keypad = props => {

    const [ playerK, setPlayerK] = useState({
        playerx: props.x,
        playery: props.y,
    })




    // useEffect(() => {
    //     props.getPlayerLocation(props.playerMapId)
    //
    // }, [refresh])

function moverDirection(direction) {

  if( direction === "N"){

      setPlayerK({playery:props.y-1, playerx:props.x})
      console.log("N", playerK)
  }
  if(direction === "S"){
      setPlayerK({playery:props.y+1,playerx:props.x})

  }
   if(direction ==="W"){
       setPlayerK({playerx:props.x-1, playery:props.y})

   }
    if(direction ==="E"){
        setPlayerK({playerx:props.x+1, playery:props.y})

    }
    console.log("player that is sent off to the server", playerK)

    props.movePlayer({player: playerK},props.playerMapId)
    props.setRefresh(true);



}








    return(
        <>
            <div>KeyPad</div>
            <button onClick={() => {moverDirection("N")}}>N</button>
            <button onClick={() => {moverDirection("S")}}>S</button>
            <button onClick={() => {moverDirection("E")}}>E</button>
            <button onClick={() => {moverDirection("W")}}>W</button>
            </>
    )
}

const mapStateToProps = state => {
    return{
        x: state.charReducer.playerX,
        y: state.charReducer.playerY,
        playerMapId: state.charReducer.mapId,
    }
}
export default connect(mapStateToProps, {movePlayer, getPlayerLocation})(Keypad);