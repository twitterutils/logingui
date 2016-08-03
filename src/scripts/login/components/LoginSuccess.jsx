import React from 'react';
import {readUrlParams} from '../lib/loginUrlUtils.js'

class LoginSuccess extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userId: readUrlParams().userId
        };
    }
    render(){
        return (
            <div className="jumbotron success-container">
                <h2>Login Successful</h2>
                <p className="lead">
                    Twitter User Id: <span>{this.state.userId}</span>
                </p>
            </div>
        );
    }
}

export default LoginSuccess;