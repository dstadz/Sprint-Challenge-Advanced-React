import React from 'react'
//import styled from 'styled-components'

class Player extends React.Component {

  render() {
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.country}</p>
        <p>{this.props.searches}</p>
        
          
          
        
      
      </div>
    )
  }
}


export default Player