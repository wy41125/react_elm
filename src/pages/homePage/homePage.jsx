import React, { Component, Fragment } from 'react';
import store from '../../store'
import reducer from '../../store/reducer';
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
                {this.state.data}
                <button style={{background:'#1232aa',color:'#ffffff',width:'100px',height:'100px'}} onClick={this.changeClick}>change</button>
            </Fragment>
        );
    }
    changeClick(e){
        const action = {
            type:'change_home_data',
            value:'homeData'
        }
        store.dispatch(action)
    }
}
 
export default HomePage;