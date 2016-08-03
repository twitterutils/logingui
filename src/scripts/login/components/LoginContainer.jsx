import React from 'react';
import {readUrlParams} from '../lib/loginUrlUtils.js'
import LoginButton from './LoginButton.jsx'
import LoginResult from './LoginResult.jsx'

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        var urlParams = readUrlParams();

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