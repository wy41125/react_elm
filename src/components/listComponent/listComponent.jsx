import './listComponent.less'
import React,{ Component } from 'react'
 class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <div className="listCom">
                <div className="list_box">
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon01.gif')} alt=""/><br/>
                        美食
                    </div>
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon02.gif')} alt=""/><br/>
                        卖场便利
                    </div>
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon03.gif')} alt=""/><br/>
                        水果
                    </div>
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon04.gif')} alt=""/><br/>
                        跑腿代购
                    </div>
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon05.gif')} alt=""/><br/>
                        甜品饮品
                    </div>
                </div>
                <div className="list_box">
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon06.gif')} alt=""/><br/>
                        星选好店
                    </div>
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon07.gif')} alt=""/><br/>
                        送药上门
                    </div>
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon08.gif')} alt=""/><br/>
                        大牌惠吃
                    </div>
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon09.gif')} alt=""/><br/>
                        取送件
                    </div>
                    <div className="list">
                        <img src={require('../../image/homePage/list_home_icon10.gif')} alt=""/><br/>
                        签到领红包
                    </div>
                </div>
            </div>
        );
    }
 }
  
 export default ListComponent;