import React, { Component } from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" ></div>
        <Nav />
      </Router>
    );
  }
}

export default App;
