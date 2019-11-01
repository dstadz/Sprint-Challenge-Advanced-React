import React from 'react';
import axios from 'axios'
import PlayerList from './components/PlayerList'
import Nav from './components/Nav'
import {useDarkMode} from './hooks/useDarkMode'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  
  console.log(this.state)
  }


  componentDidMount() {
    console.log('mounted')
    axios.get(`http://localhost:5000/api/players`)
    .then(res => {
      this.setState({
        players: res.data,
      })
    })
    .catch(err => console.log(err))
  }

  


  render() {
    return (
      <div className='App'>
        <h2>Welcome to your player App!</h2>
        <Nav />
        
        <PlayerList 
          players={this.state.players}
        />
      </div>
    );
  }
}

export default App;