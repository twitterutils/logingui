import React from 'react';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);

        var baseUrl = props.baseUrl;
        var loginApiUrl = baseUrl + "/login/api/v1/login";

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
            <a className="btn btn-lg btn-success"
                role="button"
                href={this.state.url}>
                Signup Today
            </a>
        );
    }
}

export default LoginButton;