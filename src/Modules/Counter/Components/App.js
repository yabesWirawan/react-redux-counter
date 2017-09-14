import React, { Component } from 'react';
import CounterList from '../Containers/CounterList';
import logo from './img/logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Counter</h2>
        </div>
        <div className="App-intro">
          <br/><br/>
          <div className="Components" id="App">
          <small>App Components</small>
            <CounterList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
