import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./page/navigation"
import Home from "./page/home"

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Navigation />}></Route>
          <Route path="/home" render={() => <Home />}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
