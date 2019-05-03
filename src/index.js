import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./pages/home";
import Detail from "./pages/detail";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
