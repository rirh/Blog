import Header from './components/header'
import Context from './components/contrain'

import React, { Component } from 'react'


export default class App extends Component {
  handleGet(aaa: any) {
    console.log(aaa);

  }
  render() {
    return (
      <div>
        <Header></Header>
        <Context></Context>

      </div>
    )
  }
}
