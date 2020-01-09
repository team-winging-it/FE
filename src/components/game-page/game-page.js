import React from "react";
import Cells_Dummy from './cells';

const GamePage = props => {
  const width = Cells_Dummy.sort( (a,b) => {
    return b.x - a.x
  })[0].x;

  const height = Cells_Dummy.sort( (a,b) => {
    return b.y - a.y
  })[0].y;
  const grid = [];
  for (let i = 0; i <= height; i++) {
    const row = []
    for (let j = 0; j < Cells_Dummy.length; j++) {
      if (Cells_Dummy[j].y === i){
        row.push(Cells_Dummy[j])
      }

    }
    grid.push(row)
  }
// const gridString = grid.map( row => row.map(cell => cell.type).join(''))
  return (
    <div>
      {grid.map( row => <div style = {{ height: 'auto'}}>{row.map( cell =>
      {
        let color = '';

        if (cell.type === 'floor')
        {
          color = 'brown';

        }
        if (cell.type === 'door')
        {
          color = 'gray';
        }
        if (cell.type === 0)
        {
          color = 'black'
        }
        return <div style = {{backgroundColor: color, width:22, height:22, display: 'inline-block'}}/>
      } )}</div>)}
    w:{width}
    h:{height}


    </div>
  );
};

export default GamePage;
