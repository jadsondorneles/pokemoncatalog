import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Catalog from './pages/Catalog'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Pokemon" component={Pokemon} />
      <Route exact path="/Pokemon/:search" component={Pokemon} />
      <Route exact path="/Catalog" component={Catalog} />
      <Route path="*" component={() => <h1>Error404</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes