import React from 'react';
import {readUrlParams} from '../lib/loginUrlUtils.js'

class LoginError extends React.Component {
    render(){
        return (
            <div className="jumbotron error-container">
                <h2 className="bg-danger">Login Failed</h2>
                <p className="lead">{this.props.error}</p>
            </div>
        );
    }
}

export default LoginError;