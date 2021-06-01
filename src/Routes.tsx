import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import SingleBookPage from './pages/SingleBookPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/book" component={SingleBookPage} />
  </Switch>
)

export default Routes
