import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import SignupPage from './SignupPage/SignupPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignupPage} />
      </div>
    );
  }
}

export default App;
