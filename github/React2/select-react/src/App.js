import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./component/selectgenius"
class App extends Component {
  render() {
      return (
      <div className="App">
          <List/>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
