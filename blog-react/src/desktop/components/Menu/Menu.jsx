import React, { Component } from 'react';
import style from './menu.css';
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    const menus = [{
      name: 'Vue',
      path: ""
    }, {
      name: 'React',
      path: ""
    }, {
      name: 'Nginx',
      path: ""
    },{
      name: '小程序',
      path: ""
    }
    // ,{
    //   name: 'uni-app',
    //   path: ""
    // }
    // ,{
    //   name: 'project',
    //   path: ""
    // }
    ,
    {
      name: 'github',
      path: ""
    },];
    return (
      <header className={style.menuWapper}>
        <Link to="/" className={style.logo}>TigerZH</Link>
        <div className={style.nav}>
          <input className={style.search} type="text" />
          <ul className={style.contain} >
            {
              menus.map(e =>
                <li key={e.name} className={style.containItem}>
                  <Link className={style.navItem} to={e.path}>{e.name}</Link>
                </li>)
            }
          </ul>
        </div>

      </header>
    )
  }
}
