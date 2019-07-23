import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh } from 'antd-mobile';
import Business from '../business/business'
function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
      dataArr.push(i);
    }
    return dataArr;
  }
class BesinessList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            height: document.documentElement.clientHeight,
            data: [],
        };
    }
    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }
    render() {
        return (<div>
            <PullToRefresh
                damping={60}
                ref={el => this.ptr = el}
                indicator={{ activate: '加载中...' }}
                direction='up'
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({ refreshing: true });
                    setTimeout(() => {
                        this.setState({ refreshing: false });
                    }, 1000);
                }}
            >
            {this.state.data.map(i => (
                <div key={i}>
                    <Business/>
                </div>
            ))}
            </PullToRefresh>
        </div>);
      }
}
 
export default BesinessList;