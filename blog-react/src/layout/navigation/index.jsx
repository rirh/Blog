import React, { Component } from 'react';
import Boll from './component/boll';
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import u from 'utils';
import style from "./index.css"


@inject('appState') @observer
class Navigation extends Component {
    componentWillUnmount() {
        if (!u.isWebGLAvailable()) {
            var warning = u.getWebGLErrorMessage();
            document.getElementById('container').appendChild(warning);
        }
    }
    render() {
        return (
            <div className={style.wapper} >
               
                <Boll />
                <button className={style.btn}>点击开始</button>
            </div>
        )
    }
}
export default Navigation;

Navigation.PropTypes = {
    appState: PropTypes.object
}