import React, { Component, Fragment } from 'react'

export default class index extends Component {
  render() {
    const height = document.documentElement.clientHeight - (16 * 3.6);
    return (
      <Fragment>
        <iframe id="koa2"
          title="koa2"
          width="100%"
          height={`${height}px`}
          src="https://chenshenhai.github.io/koa2-note/note/start/quick.html">
        </iframe>
      </Fragment>
    )
  }
}
