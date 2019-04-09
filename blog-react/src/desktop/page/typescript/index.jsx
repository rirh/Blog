import React, { Component, Fragment } from 'react'

export default class index extends Component {
  render() {
    const height = document.documentElement.clientHeight - (16 * 3.6);
    return (
      <Fragment>
        <iframe id="typescript"
          title="typescript"
          width="100%"
          height={`${height}px`}
          src="https://ts.xcatliu.com/basics/primitive-data-types.html">
        </iframe>
      </Fragment>
    )
  }
}
