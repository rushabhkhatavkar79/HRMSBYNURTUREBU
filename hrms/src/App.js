import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from './containers/Login'
import Home from './components/Home'
import './App.css';
import MyLeave from './containers/Leave';
import Directory from './containers/Directory';
import MyInfo from './components/MyInfo';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Redirect from="/" to="/login" />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/home"><Home /></Route>
            <Route path="/leaveinformation"><MyLeave /></Route>
            <Route path="/viewdirectory" component={Directory} />

            <Route path="/myinformation" component={MyInfo} />

          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
