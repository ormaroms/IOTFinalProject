import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentStatus from './Componnents/CurrentStatus/CurrentStatus'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CurrentStatus/>
        </header>
      </div>
    );
  }
}

export default App;
