import React ,{useEffect, useState}from "react";
import {connect} from "react-redux";
import {movePlayer, getPlayerLocation} from "../../actions/charActions"








const Keypad = props => {

    const [ player, setPlayer] = useState({
        playerx: props.x,
        playery: props.y,
    })


    const [ refresh, setRefresh] = useState(false)

    // useEffect(() => {
    //     props.getPlayerLocation(props.playerMapId)
    //
    // }, [refresh])

function moverDirection(direction) {

  if( direction === "N"){
      setPlayer({playery:props.y-1, playerx:props.x})
  }
  if(direction === "S"){
      setPlayer({playery:props.y+1,playerx:props.x})

  }
   if(direction ==="W"){
       setPlayer({playerx:props.x-1, playery:props.y})

   }
    if(direction ==="E"){
        setPlayer({playerx:props.x+1, playery:props.y})

    }


    props.movePlayer({player},props.playerMapId)
    setRefresh(true);

}




console.log("keyPad", props)



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