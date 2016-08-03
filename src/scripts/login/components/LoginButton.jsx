import React from 'react';
import {readUrlParams} from '../lib/loginUrlUtils.js'

class LoginButton extends React.Component {
    constructor(props) {
        super(props);

        var urlParams = readUrlParams();

        var baseUrl = "https://twu-api.herokuapp.com";
        if (urlParams.isDev === "true"){
            baseUrl = "http://localhost:8080";
        }
        var loginApiUrl = baseUrl + "/login/api/v1/login";

        this.state = {
            url: loginApiUrl + "?callback=" + window.location.href,
            visible: !urlParams.error && !urlParams.userId
        };
    }
    render () {
        if (!this.state.visible){
            return(null);
        }

        return(
            <a className="btn btn-lg btn-success"
                role="button"
                href={this.state.url}>
                Signup Today
            </a>
        );
    }
}

export default LoginButton;