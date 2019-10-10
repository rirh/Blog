import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import { observer, inject } from "mobx-react";
import Menu from "@/desktop/components/Menu";
import style from './index.css';
import Image from '../../../assets/image/notemusic.gif'
import Mindex from '../../../assets/image/music-index.png'
import Fm from '../../../assets/image/music-fm.png'
import Mv from '../../../assets/image/music-mv.png'
import Playlist from '../../../assets/image/music-playlist.png'
import Singer from '../../../assets/image/music-singer.png'
import News from '../../../assets/image/music-new.png'
import Player from '../../../assets/image/music-play.png'

@inject('appState') @observer
class index extends Component {
  render() {
    const { menus } = this.props.appState.home;
    return (
      <Fragment  >
        <div className={style.wapper}>
          {/* <img className={style.image} src={Image} alt="" srcset="" /> */}
          <img className={style.image} src={Mindex} alt="" srcset="" />
          <img className={style.image} src={Fm} alt="" srcset="" />
          <img className={style.image} src={Mv} alt="" srcset="" />
          <img className={style.image} src={Playlist} alt="" srcset="" />
          <img className={style.image} src={Singer} alt="" srcset="" />
          <img className={style.image} src={News} alt="" srcset="" />
          <img className={style.image} src={Player} alt="" srcset="" />
        </div>


      </Fragment>
    )
  }
}
export default index;