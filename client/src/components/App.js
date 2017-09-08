import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import SignupPage from './Auth/SignupPage';
import LoginPage from './Auth/LoginPage';
import './App.css';

/*
  Me query to see if user is authenticated
  TODO: Implement authenticated routes
*/

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
