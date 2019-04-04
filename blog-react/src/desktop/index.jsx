import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./page/navigation"
import Home from "./page/main"

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Navigation />}></Route>
          <Route path="/main" render={() => <Home />}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
