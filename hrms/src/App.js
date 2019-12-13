import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from './containers/Login'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Redirect from="/" to="/login" />
          <Switch>
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
