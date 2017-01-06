import React, { Component } from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import HomePage from './components/page/HomePage';
import SupportPage from './components/page/SupportPage';
import NotFoundPage from './components/page/NotFoundPage';

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
