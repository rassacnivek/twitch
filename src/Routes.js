import React from "react";
import { Route, Router, withRouter, Switch } from "react-router-dom";
import Home from './pages/Home';
import PageNotFound from "./pages/PageNotFound";
import history from "./utils/history";
import './App.css';

const Routes = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router >
  );
};

export default withRouter(Routes);