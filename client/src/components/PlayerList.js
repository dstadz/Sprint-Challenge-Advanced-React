import React from 'react'
import Player from './Player'

class PlayerList extends React.Component {

  render() {

    return(
      <div>
        <h2>PlayerList</h2>
        <div>
          
          {JSON.stringify(this.props.players[0])}
          {this.props.players.map(player =>
            <Player 
            key= {player.id}
            name= {player.name}
            country={player.country}
            searches={player.searches}
            />
            )}
        </div>
      
      </div>
    )
  }
}


export default PlayerList