import React from 'react';
import Game from './Game';
import './App.css';

function App() {
  return (
    <div className="App">
     <Game/> 
    </div>
  );
}

export default App;



//  const [winner ,setWinner]=useState();


  // if(isGameOvered()){
  //                   setWinner(player);
  //               } else{
                    
  //               }


        // const isGameOvered =()=>{
        //     return rowCrossed() || columnCrossed() || diagonalCrossed()
        // }

        // const rowCrossed=()=>{
        //     for (let i =0; i<3;i++){
        //         if (board[i][0] === board[i][1]
        //              && board[i][1] ===board[i][2]
        //              && board[i][0] !== undefined){
        //                  return true;
        //              }
        //     }
        //     return false;
        // };

        // const columnCrossed =()=>{

        //     for (let j =0; j<3;j++){
        //         if (board[0][j] === board[1][j]
        //              && board[1][j] ===board[2][j]
        //              && board[0][j] !== undefined){
        //                  return true;
        //              }
        //     }
        //     return false;

        // };

        // const diagonalCrossed =()=>{
        //     if (board[0][0] === board[1][1] &&
        //         board[1][1] === board[2][2]
        //         && board[0][0] !== undefined){
        //             return true;
        //         };

        //     if (board[0][2] === board[1][1] &&
        //         board[1][1] === board[2][0] && 
        //         board[0][2] !==undefined){
        //             return true;
        //         }

        //         return false;

        // };