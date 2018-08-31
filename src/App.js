import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomePage } from './pages/Home/index';
import { PersonPage } from './pages/Person/index';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/person" component={PersonPage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
