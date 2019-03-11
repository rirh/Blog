import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "mobx-react"
import u from 'utils'
import Navigation from 'layout/navigation'
import View from 'layout/view'
import appState from "store"



class App extends Component {
    component() {
        let component;
        const { isPc } = u.os();
        if (isPc) {
            component = Navigation;
        } else {
            component = View;
        }
        return component;
    }
    render() {
        return (
            <Provider appState={appState}>
                <BrowserRouter>
                    <Route component={this.component()}></Route>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App;


