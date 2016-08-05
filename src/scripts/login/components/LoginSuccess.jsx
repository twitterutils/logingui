import React from 'react';
import LoginSuccessMessage from './LoginSuccessMessage.jsx'
import FeedBox from '../../feed/components/FeedBox.jsx'

class LoginSuccess extends React.Component {
    render(){
        return (
            <div>
                <LoginSuccessMessage />

                <FeedBox userDetails={this.props.userDetails}/>
            </div>
        );
    }
}

export default LoginSuccess;