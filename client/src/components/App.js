import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import SignupPage from './Auth/SignupPage';
import LoginPage from './Auth/LoginPage';
import './App.css';
import { connect } from 'react-redux';
import NotFound from './Auth/NotFound';

/*
  Me query to see if user is authenticated
  TODO: Implement authenticated routes
*/

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )}
    />
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute
            isAuthenticated={this.props.isAuthenticated}
            exact
            path="/"
            component={Dashboard}
          />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.users.isAuthenticated,
  };
};

export default connect(mapStateToProps, {}, null, { pure: false })(App);
