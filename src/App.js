import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import { Route, Switch, Router, Redirect } from 'react-static';

// import Joint
import Home from './component/home/Home';
import Info from './component/info/Info';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/info' component={Info} />
          <Redirect from='/*' to='/' />
        </Switch>
      </Router>
    )
  }
}

export default hot(module)(App)
