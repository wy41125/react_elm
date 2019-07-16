import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginType:'未登录'
        }
    }
    render() { 
        return ( 
            <div>
                {this.state.loginType}
            </div>
         );
    }
}
 
export default Login;