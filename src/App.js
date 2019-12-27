import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Listings from "./screens/Listings";
import Bidders from "./screens/Bidders3";
import Search4 from "./screens/Search4";
import Offer from "./screens/Offer5";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Offer} />
        </Switch>
      </Router>
    );
  }
}
