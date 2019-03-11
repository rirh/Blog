import React, { Component } from 'react';
import Boll from './component/boll';
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject('appState') @observer
class Navigation extends Component {
    render() {
        console.log(this.props.appState.msg)
        return (
            <div>
                <Boll />
            </div>
        )
    }
}
export default Navigation;

Navigation.PropTypes={
    appState:PropTypes.object
}