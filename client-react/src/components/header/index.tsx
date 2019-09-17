import './index.css'
import { Icon } from 'antd';


import React, { Component } from 'react'
const initialState = {
    show: false,
    active: '代表作',
    list: [{
        name: '代表作'
    }, {
        name: '实验室'
    }, {
        name: '我'
    }]
};
type State = Readonly<typeof initialState>
export default class Header extends Component {
  
    readonly state: State = initialState;
    handleOnMenu(e: any) {
        this.setState({
            active: e.name
        });
    }
    handleToggleShow() {

        this.setState({
            show: !this.state.show
        })


    }
    render() {
        return (
            <header className="header">
                <div className="header-contain phone">

                    <div className="phone-left">
                        {/* <Icon type="menu" /> */}
                        温城说
                    </div>
                    <div className="phone-right" >
                        <Icon onClick={this.handleToggleShow.bind(this)} type="menu" />
                    </div>
                    <ul className="phone-panel"
                        style={{ 'display': this.state.show ? 'flex' : 'none' }}
                    >
                        {
                            this.state.list.map((e: any) =>
                                <li className="panel-item" key={e.name}>{e.name}</li>
                            )
                        }

                    </ul>
                </div>
                <div className="header-contain pc">
                    <div className="pc-header">
                        <div className="pc-left">温成说</div>
                        <ul className="menu"
                        >
                            {
                                this.state.list.map((e: any) =>
                                    <li onClick={this.handleOnMenu.bind(this, e)} className="menu-item" key={e.name}>{e.name}</li>
                                )
                            }

                        </ul>
                    </div>

                </div>
            </header >
        )
    }
}
