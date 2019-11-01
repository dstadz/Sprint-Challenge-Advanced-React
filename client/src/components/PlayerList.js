import React from 'react'


 const PlayerList = props => {
  console.log(props.players)

 



  return(
    <div>
      <h2>PlayerList</h2>
      <div>
        {JSON.stringify(props.players[0])}

      </div>
    
    </div>
  )
}


export default PlayerList