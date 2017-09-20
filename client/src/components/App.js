import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import SignupPage from "./Auth/SignupPage";
import LoginPage from "./Auth/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";

import NotFound from "./Auth/NotFound";

/*
  Me query to see if user is authenticated
  TODO: Implement authenticated routes
*/

class App extends Component {
  render() {
    let { isAuthenticated } = this.props;
    return (
      <div>
        <Switch>
          <PrivateRoute
            isAuthenticated={isAuthenticated}
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

export default App;
