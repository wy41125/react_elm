import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
class SwiperCom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: ['1', '2', '3'],
            imgHeight: 45,
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() { 
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                >
                {this.state.data.map(val => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
            </WingBlank>
        );
    }
}
 
export default SwiperCom;
