import React from 'react';
import ErrorStatus from './ErrorStatus.jsx';
import SuccessStatus from './SuccessStatus.jsx';

class SingleApiStatus extends React.Component {
    render() {
        return (
            <div>
                <SuccessStatus label={this.props.apiName} />
                <ErrorStatus label={this.props.apiName} />
            </div>
        )
    }
}

export default SingleApiStatus;