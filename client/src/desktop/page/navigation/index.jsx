import React, { Component } from 'react';
import Boll from './component/boll';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom'; // 或者 是import { withRouter } from 'react-router-dom';
import u from 'utils';
import style from "./index.css"


@inject('appState') @observer @withRouter
class Navigation extends Component {
    constructor(props) {
        super()
        this.handleGo = this.handleGo.bind(this);
    }
    componentWillUnmount() {
        if (!u.isWebGLAvailable()) {
            var warning = u.getWebGLErrorMessage();
            document.getElementById('container').appendChild(warning);
        }
    }
    handleGo() {
        console.log(this.props)
        this.props.history.push("/main");
    }
    render() {
        return (
            <div className={style.wapper} >
                <Boll />
                <button className={style.btn} onClick={this.handleGo}>点击开始</button>
            </div>
        )
    }
}
export default Navigation;

