import React from 'react';
import {getQueryStringParams} from '../../lib/urlUtils.js'
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
            }
        };
    }

    render(){
        return (
            <div>
                <LoginButton
                    userDetails={this.state.userDetails}
                    errorDetails={this.state.errorDetails} />
                <LoginResult 
                    userDetails={this.state.userDetails}
                    errorDetails={this.state.errorDetails} />
            </div>
        );
    }
}

export default LoginContainer;