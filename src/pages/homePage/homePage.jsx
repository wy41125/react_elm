import React, { Component, Fragment } from 'react';
import store from '../../store'
import './homePage.less'
import ListComponent from '../../components/listComponent/listComponent'
import BesinessList from '../../components/businessList/besinessList'
import Swiper from '../../components/swiper/swiper'
import { Link } from "react-router-dom";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannarImg:'../../image/homePage/bannar01.gif',
        }
        this.changeClick = this.changeClick.bind(this)
        store.subscribe(this.changeClick)
    }

    render() { 
        return ( 
            <Fragment>
                <div className="address_div">
                    <Link to="/other"><i></i>浙江省杭州市</Link>
                </div>
                <div className="search_div">
                    <div className="input_div">
                        <i></i>元祖美食 最高减30
                    </div>
                </div>
                <div className="swipe_div">
                    {/* <div className="img">
                        <img src={require('../../image/homePage/bannar01.gif')} alt=""/>
                    </div> */}
                    <Swiper/>
                </div>
                <div className="pageClick">
                    <ListComponent/>
                </div>
                <div className="business"> 
                    <div className="title_div">推荐商家</div>
                    <div className="business_list">
                        <BesinessList/>
                    </div>
                </div>
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