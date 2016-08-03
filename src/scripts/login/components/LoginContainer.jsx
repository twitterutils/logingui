import React from 'react';
import LoginButton from './LoginButton.jsx'
import LoginResult from './LoginResult.jsx'

class LoginContainer extends React.Component {
    render(){
        return (
            <div>
                <LoginButton />
                <LoginResult />
            </div>
        );
    }
}

export default LoginContainer;