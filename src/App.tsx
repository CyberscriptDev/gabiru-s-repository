import React from "react";
import { Home } from "./components/Home";
import { History } from "history";
import { Route, Router, Switch } from "react-router-dom";

type AppProps = {
  history: History;
};

export default function App ({ history }: AppProps) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/componentes">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}