import React from 'react';

class ErrorStatus extends React.Component {
    render() {
        return (
            <h2>
                <span className="label label-danger">
                    {this.props.label}
                </span>
            </h2>
        )
    }
}

export default ErrorStatus;