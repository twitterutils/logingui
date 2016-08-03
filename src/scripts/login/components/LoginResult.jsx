import React from 'react';
import LoginError from './LoginError.jsx'
import LoginSuccess from './LoginSuccess.jsx'

class LoginResult extends React.Component {
    render() {
        if (this.props.errorDetails){
            return (
                <div>
                    <LoginError error={this.props.errorDetails}/>
                </div>
            );
        }

        if (this.props.userDetails.userId){
            return (
                <div>
                    <LoginSuccess userId={this.props.userDetails.userId}/>
                </div>
            );
        }

        return (null);
    }
}

export default LoginResult;