import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from '../components/main'
import Login from '../pages/login/login'
import other from '../pages/other/other'

class RouteConfig extends Component {
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/other" component={other}></Route>
                </Switch>
            </Router> 
        );
    }
}
 
export default RouteConfig;