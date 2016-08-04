import React from 'react';

class LoadingStatus extends React.Component {
    render() {
        return (
            <h2>
                <span className="label label-default">
                    {this.props.label}
                </span>
            </h2>
        )
    }
}

export default LoadingStatus;