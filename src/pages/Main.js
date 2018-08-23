import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Forecaster from './Forecaster'
import HealthChecker from './HealthChecker'
import LandingPage from '../components/LandingPage'

class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact={true} path='/' component={LandingPage} />
          <Route path='/forecaster' component={Forecaster}/>
          <Route path='/health-checker' component={HealthChecker} />
        </Switch>
      </div>
    )
  }
}

export default Main
