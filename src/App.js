import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

// import Joint
import Home from './component/Home';

class App extends Component {
  render () {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default hot(module)(App)
