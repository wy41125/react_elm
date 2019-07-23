import React, { Component } from 'react';
import './business.less'
class business extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <div className="business_div">
                <div className="bus_img">
                    <img src={require('../../image/homePage/shop_kfc.gif')} alt=""/>
                </div>
                <div className="bus_data">
                    <p className="bus_name">肯德基在寄送(某某路)</p>
                    <div className="bus_price">
                        <div>
                            <p>
                                <span className="bus_evaluate_number"><i></i>4.8</span>
                                <span>月售1708</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>起送￥0</span>
                                <span>配送￥9</span>
                            </p>
                            <p className="floatRight">
                                <span>30分钟</span>
                                <span>1.1KM</span>
                            </p>
                        </div>
                    </div>
                    <div className="evaluate">
                        <span>“吮指原味鸡好吃到吮指”</span><span>吃货强推</span>
                    </div>
                    <div className="label">
                        <span>5折</span><span>8元特价</span><span>首单减27</span>
                        <span className="ashing">开发票</span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default business;