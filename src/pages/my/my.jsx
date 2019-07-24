import React, { Component,Fragment } from 'react';
import './my.less'
class My extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <Fragment>
                <div className="user_top">
                    <div className="user_data">
                        <p className="user_name">456791346</p>
                        <p className="user_evaluate">再忙，也要记得吃饭呀~</p>
                        <p className="user_signIn">
                            <i></i>签到领￥10红包
                        </p>
                    </div>
                    <div className="user_img">
                        <img src={require('../../image/my/icon_img.gif')} alt=""/>
                    </div>
                </div>
                <div className="VIP_div">
                    <p className="VIP_name">
                        <i></i>
                        超级会员
                    </p>
                    <p className="VIP_price">
                        开通后，每月领超过<em>20</em>元红包
                    </p>
                </div>
                <div className="dissection">
                    <div className="redBox">
                        <p className="title">红包</p>
                        <p className="text"><em>4</em>个未使用</p>
                        <i className="icon"></i>
                    </div>
                    <div className="wallet">
                        <p className="title">钱包</p>
                        <p className="text">金币、福利、借钱</p>
                        <i className="icon"></i>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default My;