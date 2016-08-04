import React from 'react';
import {getQueryStringParams, getBaseUrl} from '../../lib/urlUtils.js'
import LoginButton from './LoginButton.jsx'
import LoginResult from './LoginResult.jsx'

class LoginContainer extends React.Component {
    readUrlParams(){
        return {
            userId: getQueryStringParams("user_id") || null,
            userName: getQueryStringParams("screen_name") || null,
            error: getQueryStringParams("error") || null
        };
    }

    constructor(props) {
        super(props);

        var urlParams = this.readUrlParams();

        this.state = {
            errorDetails: urlParams.error,
            userDetails: {
                userId: urlParams.userId,
                userName: urlParams.userName,
            },
            baseUrl: getBaseUrl()
        };
    }

    render(){
        return (
            <div>
                <LoginButton
                    userDetails={this.state.userDetails}
                    errorDetails={this.state.errorDetails}
                    baseUrl={this.state.baseUrl} />
                <LoginResult 
                    userDetails={this.state.userDetails}
                    errorDetails={this.state.errorDetails}
                    baseUrl={this.state.baseUrl} />
            </div>
        );
    }
}

export default LoginContainer;