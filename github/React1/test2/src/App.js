import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from "./component/News.js"
import UserList from "./component/UserList"
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList/>
      </div>
    );
  }
}
export default App;
