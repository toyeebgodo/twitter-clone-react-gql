import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import users from "./reducers/users";

const networkInterface = createNetworkInterface({
  uri: "http://localhost:3001/graphql"
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // Create the header object if needed.
      }

      // get the authentication token from local storage if it exists
      const token = localStorage.getItem("token");
      console.log("@network/headers", token);
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    }
  }
]);

const client = new ApolloClient({
  networkInterface
});

const middlewares = [client.middleware(), thunk];

const store = createStore(
  combineReducers({
    users: users,
    apollo: client.reducer()
  }),
  {}, // initial state
  compose(
    applyMiddleware(...middlewares),
    // If you are using the devToolsExtension, you can add it here also
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

let token = localStorage.getItem("token");
console.log(token);
if (token != null) {
  console.log("inside")
  store.dispatch({ type: 'LOGIN' });
}

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
