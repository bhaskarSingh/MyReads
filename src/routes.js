import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Search from './Pages/Search'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
    </Switch>
)

export default Routes;