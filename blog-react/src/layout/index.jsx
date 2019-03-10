import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import u from 'utils'
import Navigation from 'layout/navigation'
import View from 'layout/view'
import cssObj from 'layout/index.css'



class App extends Component {
    component(){
        let component ;
        const { isPc } = u.os();
        if(isPc){
            component=  Navigation;
        }else{
            component=  View;
        }
        return component;
    }
    render() {
        console.log(11,cssObj)
        return (
            <BrowserRouter>
                <Route component={this.component()}></Route>
            </BrowserRouter>
        )
    }
}
export default App;


