import React from 'react'
import Players from './Players'
import Player from './Player'
import './App.css'
function PlayerList() {
    const inline={
        display:'flex',
        justifyContent:'space-between',
        marginTop:'5%',
        margin:'5%'
       
      }
  return (
    <div style={inline}>
  
      {
        Players.map(
            (el,i)=>(
                <Player  el={el} key={i} />
               
            )
            
        )
      }
    </div>
  )
}

export default PlayerList
