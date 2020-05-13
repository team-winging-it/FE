import React ,{useEffect, useState}from "react";
import {connect} from "react-redux";
import {movePlayer, getPlayerLocation, setRefresh} from "../../actions/charActions"
// import {Promise} from "bluebird";









const Keypad = props => {

    const {setPlayer, player, setRefresh} = props;

    // const [ playerK, setPlayerK] = useState({
    //     playerx: props.x,
    //     playery: props.y,
    // })




    // useEffect(() => {
    //     props.getPlayerLocation(props.playerMapId)
    //
    // }, [refresh])

function moveDirection(direction) {


  if( direction === "N"){

      // setPlayer({y:props.y-1, x:props.x})
          // let nMove = new Promise((resolve, reject) => {
          //     setPlayer({y:props.y-1, x:props.x})
          //     // console.log(player)
          //     //   resolve()
          //     // return resolve
          //
          // });
          // nMove.then((res) => {
          //     console.log("SDOFSOIFSJFOSDJFSD")
          //     props.movePlayer({player: player},props.playerMapId)
          //     // return res
          //
          // })
          //     .then((res) => {
          //       props.setRefresh(true);
          //       // res()
          //   })
      // const promise1 = Promise.resolve( setPlayer({y:props.y-1, x:props.x}));
      // const promise2 = Promise.resolve(props.movePlayer({player: player},props.playerMapId))
      // const promise3 = Promise.resolve(props.setRefresh(true))


        function movementTest() {
          let moveN = ({playery:props.y-1, playerx:props.x})
            // while( setPlayer({y:props.y-1, x:props.x}) !== moveN){
            //
            //
            // }

            props.movePlayer(moveN,props.playerMapId)
            return moveN
        }
        movementTest()
        setRefresh(true)
        // function moveNorth(){
        //     Promise.resolve(movementTest)
        //
        //
        // }
        // const myPromise =
        //     (new Promise(moveNorth))
        //     .then((res) => {
        //         console.log("reee", res)
        //         props.movePlayer({res},props.playerMapId)
        //     })
        //     // .then(props.setRefresh(true))

      // const myPromise = (new Promise(setPlayer({y:props.y-1, x:props.x}, reject)))
      //     .then(props.movePlayer({player: player},props.playerMapId))
      //     .then(console.log("N", player))


  }
  if(direction === "S"){
      setPlayer({y:props.y+1,x:props.x})

  }
   if(direction ==="W"){
       setPlayer({x:props.x-1, y:props.y})

   }
    if(direction ==="E"){
        setPlayer({x:props.x+1, y:props.y})

    }
    // console.log("player that is sent off to the server", player)
    //
    // props.movePlayer({player: player},props.playerMapId)




}








    return(
        <>
            <div>KeyPad</div>
            <button onClick={() => {moveDirection("N")}}>N</button>
            <button onClick={() => {moveDirection("S")}}>S</button>
            <button onClick={() => {moveDirection("E")}}>E</button>
            <button onClick={() => {moveDirection("W")}}>W</button>
            </>
    )
}

const mapStateToProps = state => {
    return{
        x: state.charReducer.playerX,
        y: state.charReducer.playerY,
        playerMapId: state.charReducer.mapId,
        refresh1: state.charReducer.refresh,
    }
}
export default connect(mapStateToProps, {movePlayer, getPlayerLocation, setRefresh})(Keypad);