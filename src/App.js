import React, { Component } from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

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
          <Header/>
         
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
