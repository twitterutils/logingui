import React from 'react';

class SingleApiStatus extends React.Component {
    render() {
        return (
            <h2>
                <span className="label label-default">
                    {this.props.apiName} <br />
                    {this.props.apiUrl}
                </span>
            </h2>
        )
    }
}

export default SingleApiStatus;