import React, { Component, Fragment } from 'react'
import style from './index.css'


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className={style.wapper} >
          <video autoPlay="autoplay" loop="loop">
            <source
              src="static/vedio/index_bg.mp4"
              type="video/mp4"
            />
          </video>
        </div>

      </Fragment>
    )
  }
}
