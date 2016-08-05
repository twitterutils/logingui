import React from 'react';
import {getApiBaseUrl} from '../../lib/urlUtils.js';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);

        var loginApiUrl = getApiBaseUrl() + "/login/api/v1/login";

        this.state = {
            url: loginApiUrl + "?callback=" + window.location.href,
            visible: !props.errorDetails && !props.userDetails.userId
        };
    }
    render () {
        if (!this.state.visible){
            return(null);
        }

        return(
            <div className="row jumbotron">
                <div className="col-md-8">
                    <h1>Automate Twitter</h1>
                    <p className="lead">
                        Automatically unfollow those that unfollow you
                    </p>
                </div>
                <div className="col-md-4">
                    <h1>
                        <a className="btn btn-lg btn-success"
                            role="button"
                            href={this.state.url}>
                            <img src="images/Twitter_Logo_White_On_Image.png" alt="Twitter Logo"/>
                            Sign in with Twitter
                        </a>
                    </h1>
                </div>
            </div>
        );
    }
}

export default LoginButton;