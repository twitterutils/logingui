import React from 'react';
import FeedBox from '../../feed/components/FeedBox.jsx'

class LoginSuccess extends React.Component {
    render(){
        return (
            <div>
                <h2>Login Successful</h2>

                <FeedBox userDetails={this.props.userDetails}/>
            </div>
        );
    }
}

export default LoginSuccess;