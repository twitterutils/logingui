import React from 'react';

class SuccessStatus extends React.Component {
    render() {
        return (
            <h2>
                <span className="label label-success">
                    {this.props.label}
                </span>
            </h2>
        )
    }
}

export default SuccessStatus;