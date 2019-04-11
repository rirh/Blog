import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "mobx-react"
import u from 'utils'
import Navigation from 'desktop'
import Mobile from 'mobile'
import appState from "store"
import "./index.css"

class App extends Component {
    component() {
        let component;
        const { isPc } = u.os();
        if (isPc) {
            component = Navigation;
        } else {
            component = Mobile;
        }
        return component;
    }
    render() {
        return (
            <Provider appState={appState}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={this.component()}></Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App;


