import React, { lazy, Suspense } from "react";
import { Route, Router, withRouter, Switch } from "react-router-dom";
import history from "./utils/history";
import './App.css';

const Home = lazy(() => import('./pages/Home'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

const Routes = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Suspense>
    </Router >
  );
};

export default withRouter(Routes);