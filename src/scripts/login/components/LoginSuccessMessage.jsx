import React from 'react';

class LoginSuccessMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            visible: true
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                visible: false
            });
        }, 3000);
    }

    render() {
        if (!this.state.visible){
            return (null);
        }

        return (
            <h2>Login Successful</h2>
        );
    }
}

export default LoginSuccessMessage;
