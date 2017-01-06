import React, { Component } from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import logo from './logo.svg';
import './App.css';
import HomePage from './components/layout/HomePage';
import SupportPage from './components/layout/SupportPage';
import NotFoundPage from './components/layout/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <div>
            <Match exactly pattern="/" component={HomePage} />
            <Match pattern="/support" component={SupportPage} />
            <Miss component={NotFoundPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
