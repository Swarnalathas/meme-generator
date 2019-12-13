import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import MemeGenerator from './Component/MemeGenerator';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    )
  }
}

export default App;
