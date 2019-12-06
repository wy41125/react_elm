import React, { PureComponent } from 'react';

class IndexPage extends PureComponent{
  constructor() {
    super();
    this.state = {
      arr:['1']
    };
    console.log('constructor');
  }
  changeState = () => {
    let { arr } = this.state;
    arr.push('2');
    console.log(arr);
    // ["1", "2"]
    // ["1", "2", "2"]
    // ["1", "2", "2", "2"] 
    // ....
    this.setState({
      arr:[...arr,'2']
    })
  };
  render() {
    console.log('render');
    return (
      <div>
        {/* <button onClick={this.changeState}>点击</button>
        <div>
          {this.state.arr.map((item) => {
            return item;
          })}
        </div> */}

        <Link to="www.baidu.com" >aaa</Link>
      </div>
    );
  }
}

export default IndexPage