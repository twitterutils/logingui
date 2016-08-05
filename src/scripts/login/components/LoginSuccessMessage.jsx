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
            <div className="alert alert-success alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                Login Successful
            </div>
        );
    }
}

export default LoginSuccessMessage;
