import React, { Component, } from 'react';
import { Provider } from "mobx-react";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mobile from "../client";
import Destop from "./navigtion"
import appState from "../data"

import u from '../utils'

export default class index extends Component {
  component() {
    let component;
    const { isPc } = u.os();
    if (isPc) {
      component = Destop;
    } else {
      component = Mobile;
    }
    return component;
  }
  render() {
    return (
      <Provider appState={appState}>
        {/* <BrowserRouter> */}
          {/* <Switch> */}
            {/* <Route path="/" component={this.component()}></Route> */}
          {/* </Switch> */}
        {/* </BrowserRouter> */}
      </Provider>
    )
  }
}
