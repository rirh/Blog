import React, { Component, Fragment } from 'react'
import style from './index.css';
import Morph from "./components/morph"

export default class Home extends Component {

  render() {

    // const doc_height = document.documentElement.clientHeight;
    return (
      <Fragment>
        <div className={style.wapper} >

          <Morph style={style.morph} />

          <video className={style.videoWapper} autoPlay="autoplay" loop="loop">
            <source
              src="static/vedio/index_bg.mp4"
              type="video/mp4"
            />
          </video>

          <div className={style.slogan}>

            <p className={style.sloganTitle}>Programmer</p>
            <p className={style.sloganSub}>世界上只有10类人，一类是懂二进制的，另一类是不懂的。</p>
            <p className={style.sloganDesc}>welcome to my blog</p>
          </div>
          <footer className={style.gov}>Copyright © 2018温城说个人网站 京ICP备18048665号</footer>
        </div>

      </Fragment>
    )
  }
}
