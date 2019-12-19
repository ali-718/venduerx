import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Listings from "./screens/Listings";
import Bidders from "./screens/Bidders3";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Bidders} />
        </Switch>
      </Router>
    );
  }
}
