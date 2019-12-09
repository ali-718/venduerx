import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Listings from "./screens/Listings";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Listings} />
        </Switch>
      </Router>
    );
  }
}
