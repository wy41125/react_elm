import React, { Component, Fragment } from 'react';
import store from '../../store'
import './homePage.less'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeClick = this.changeClick.bind(this)
        store.subscribe(this.changeClick)
    }
    render() { 
        return ( 
            <Fragment>
                <div className="address_div">
                    <i></i>浙江省杭州市
                </div>
                <div className="search_div"></div>
            </Fragment>
        );
    }
    changeClick(e){
        e.preventDefault()
        const action = {
            type:'change_home_data',
            value:'homeData'
        }
        store.dispatch(action)
    }
}
 
export default HomePage;