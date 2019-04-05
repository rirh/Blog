import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';
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
          <Route path="/main" exact render={() => <Home />}></Route>
          <Route path="/main/vue" render={() => <Vue />}></Route>
          <Route path="/main/react" render={() => <Reacts />}></Route>
          <Route path="/main/nginx" render={() => <Nginx />}></Route>
      </Fragment>
    )
  }
}
