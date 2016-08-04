import React from 'react';

class LoginSuccess extends React.Component {
    render(){
        return (
            <div>
                <h2>Login Successful</h2>

                <a href={"feed.html?user=" + this.props.userDetails.userName}>
                    @{this.props.userDetails.userName} Feed
                </a>
            </div>
        );
    }
}

export default LoginSuccess;