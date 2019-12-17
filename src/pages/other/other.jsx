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
    this.setState({
      arr:[...arr,'2']
    })
  };
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div>
          {this.state.arr.map((item) => {
            return item;
          })}
        </div>

        <Elmper name={'ABC'}>
          abc
        </Elmper>
      </div>
    );
  }
}

function Elmper (props){
  console.log(props)
  return (
    <div>
      123123123
    </div>
  )
}


export default IndexPage