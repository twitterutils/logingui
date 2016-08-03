import React from 'react';

class LoginSuccess extends React.Component {
    render(){
        return (
            <div className="jumbotron success-container">
                <h2>Login Successful</h2>
                <p className="lead">
                    Twitter User Id: <span>{this.props.userId}</span>
                </p>
            </div>
        );
    }
}

export default LoginSuccess;