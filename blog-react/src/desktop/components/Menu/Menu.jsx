import React, { Component } from 'react';
import style from './menu.css';
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject('appState') @observer
class Menu extends Component {
  componentDidMount() {

  }
  handleColor(val) {
    this.props.appState.home.change_preview(val)
  }
  render() {
    const { is_preview, menus } = this.props.appState.home;
    return (
      <header className={
        this.props.appState.home.is_preview
          ? style.menuWapper
          : style.unPreMenuWapper
      } >
        <Link
          to="/main"
          onClick={this.handleColor.bind(this, true)}
          className={
            this.props.appState.home.is_preview
              ?style.logo
              : style.unPrelogo}>TigerZH{is_preview}
        </Link>
        <div className={style.nav}>
          <input className={style.search} type="text" />
          <ul className={style.contain} >
            {
              menus.map(e =>
                <li onClick={this.handleColor.bind(this, false)} key={e.name} className={style.containItem}>
                  <Link className={
                    this.props.appState.home.is_preview
                      ? style.navItem
                      : style.unPrenavItem} to={e.path}>{e.name}</Link>
                </li>)
            }
          </ul>
        </div>

      </header>
    )
  }
}

export default Menu;