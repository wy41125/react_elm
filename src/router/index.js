import React,{ Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Main from '../components/main'
import Login from '../pages/login/login'

class RouteConfig extends Component {
    render() { 
        return ( 
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </HashRouter>
        );
    }
}
 
export default RouteConfig;