import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import * as Pages from "./pages/pages";

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Route exact path="/" component={Pages.Home} />
            <Route exact path="/create_account" component={Pages.CreateAccount} />
            <Route exact path="/Request" component={Pages.DatabaseListing} />
            <Route exact path="/loginpage" component={Pages.Login} />
            <Route exact path="/Profile" component={Pages.UserProfile} />
            <Route exact path="/TestRouting" component={Pages.TestRouting} />
            <Route exact path="/FoodTruckTable" component={Pages.Table} />
          </div>
        </HashRouter>
      </div>
    );
  }
}
