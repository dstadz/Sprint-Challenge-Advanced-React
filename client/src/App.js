import React from 'react';
import axios from 'axios'
import PlayerList from './components/PlayerList'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    console.log('mounted')
    axios.get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log(res.data)
      this.setState({
        players: res.data
      })
      console.log(this.state.players)
    })
    .catch(err => console.log(err))

  }

  render() {
    return (
      <div>
        <h2>Welcome to your player App!</h2>
        <PlayerList 
          players={this.state.players}
        />
      </div>
    );
  }
}

export default App;