import React from 'react';
import LoginError from './LoginError.jsx'
import LoginSuccess from './LoginSuccess.jsx'
import {readUrlParams} from '../lib/loginUrlUtils.js'

class LoginResult extends React.Component {
    constructor(props) {
        super(props);

        var urlParams = readUrlParams();

        this.state = {
            shouldDisplayError: urlParams.error,
            errorDetails: urlParams.error,
            shouldDisplaySuccess: urlParams.userId,
            userId: urlParams.userId
        };
    }

    render() {
        if (this.state.shouldDisplayError){
            return (
                <div>
                    <LoginError error={this.state.errorDetails}/>
                </div>
            );
        }

        if (this.state.shouldDisplaySuccess){
            return (
                <div>
                    <LoginSuccess userId={this.state.userId}/>
                </div>
            );
        }

        return (null);
    }
}

export default LoginResult;