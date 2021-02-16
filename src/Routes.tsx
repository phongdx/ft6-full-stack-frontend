import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetails'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Countries} />
    <Route exact path="/country/:countryName" component={CountryDetail} />
  </Switch>
)

export default Routes
