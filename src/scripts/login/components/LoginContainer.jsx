import React from 'react';
import {getQueryStringParams} from '../../lib/urlUtils.js'
import LoginButton from './LoginButton.jsx'
import LoginResult from './LoginResult.jsx'

class LoginContainer extends React.Component {
    readUrlParams(){
        return {
            isDev: getQueryStringParams("dev") || null,
            userId: getQueryStringParams("user_id") || null,
            error: getQueryStringParams("error") || null
        };
    }

    constructor(props) {
        super(props);

        var urlParams = this.readUrlParams();

        var baseUrl = "https://twu-api.herokuapp.com";
        if (urlParams.isDev === "true"){
            baseUrl = "http://localhost:8080";
        }

        this.state = {
            errorDetails: urlParams.error,
            userDetails: {
                userId: urlParams.userId
            },
            baseUrl: baseUrl
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