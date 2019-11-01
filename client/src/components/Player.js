import React from 'react'

class Player extends React.Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <h2>{this.props.name}</h2>
        <div>
          {}
          
        </div>
      
      </div>
    )
  }
}


export default Player