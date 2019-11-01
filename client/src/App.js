import React from 'react';
import axios from 'axios'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    console.log('mounted')
    axios.get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))

  }

  render() {
    return (
      <div>
        <h2>Welcome to your player App!</h2>
      </div>
    );
  }
}

export default App;