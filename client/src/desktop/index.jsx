import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navigation from "./page/navigation"
import Home from "./page/main"

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" render={() => <Navigation />}></Route>
        <Route path="/main" render={() => <Home />}></Route>
      </Fragment>
    )
  }
}
