import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from "@/desktop/components/Menu";
import Home from "../home";
import Vue from "../vue";
import Reacts from "../react";
import Nginx from "../nginx";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Menu></Menu>
        <BrowserRouter>
          <Switch>
            <Route path="/main" render={() => <Home />}></Route>
            <Route path="/main/vue" render={() => <Vue />}></Route>
            <Route path="/react" render={() => <Reacts />}></Route>
            <Route path="/nginx" render={() => <Nginx />}></Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}
