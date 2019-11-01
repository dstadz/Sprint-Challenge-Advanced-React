import React from 'react';
import axios from 'axios'
import PlayerList from './components/PlayerList'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      dark: false
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
      const toggleDark = e => {
    e.preventDefault();
    console.log(this.state.dark)
    this.setState({
      players: this.state.players,
      dark: !this.state.dark
    });
  };

    return (
      <div className='App'>
        <h2>Welcome to your player App!</h2>
        <button
          onClick={toggleDark}
        >Dark Mode?</button>
        <PlayerList 
          players={this.state.players}
        />
      </div>
    );
  }
}

export default App;