import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import { observer, inject } from "mobx-react";

import Menu from "@/desktop/components/Menu";

@inject('appState') @observer
class index extends Component {
  render() {
    const { menus } = this.props.appState.home;
    return (
      <Fragment>
        <Menu></Menu>
        {/* <Route path="/main" exact render={() => <Home />}></Route>
        <Route path="/main/vue" render={() => <Vue />}></Route>
        <Route path="/main/react" render={() => <Reacts />}></Route>
        <Route path="/main/nginx" render={() => <Nginx />}></Route> */}
        <Switch>
          {menus.map((e, i) =>
            // <Route path={e.path} key={i} exact={i===0} component={e.component}></Route>
            <Route path={e.path} key={i} exact component={e.component}></Route>
            )}
        </Switch>


      </Fragment>
    )
  }
}
export default index;