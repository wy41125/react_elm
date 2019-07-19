import React, { Component } from 'react';
import { TabBar } from 'antd-mobile'
import HomePage from '../../pages/homePage/homePage'


class tabBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedTab: 'blueTab',
         }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="外卖"
                        key="Life"
                        icon={{ uri:require('../../image/tabBar/out_food.png') }}
                        selectedIcon={{ uri:require('../../image/tabBar/out_food_action.png')}}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        <div style={{background:'#ffffff'}}>
                            <HomePage/>
                        </div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri:require('../../image/tabBar/Supermarket.png')}}
                        selectedIcon={{ uri:require('../../image/tabBar/Supermarket_action.png')}}
                        title="超市"
                        key="Koubei"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        2
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri:require('../../image/tabBar/order.png')}}
                        selectedIcon={{ uri:require('../../image/tabBar/order_action.png') }}
                        title="订单"
                        key="Friend"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        3
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: require('../../image/tabBar/my.png')}}
                        selectedIcon={{ uri: require('../../image/tabBar/my_action.png')}}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        4
                </TabBar.Item>
                </TabBar>
          </div>
        );
      }
}
 
export default tabBarComponent;

