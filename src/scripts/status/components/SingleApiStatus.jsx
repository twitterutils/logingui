import React from 'react';
import {getBaseUrl} from '../../lib/urlUtils.js'
import ErrorStatus from './ErrorStatus.jsx';
import SuccessStatus from './SuccessStatus.jsx';
import LoadingStatus from './LoadingStatus.jsx';

class SingleApiStatus extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            error: false,
            success: false,
            url: getBaseUrl() + props.apiUrl
        };
    }

    render() {
        if (this.state.loading){
            return (
                <LoadingStatus label={this.props.apiName} />
            )
        }

        if (this.state.error){
            return (
                <ErrorStatus label={this.props.apiName} />
            )
        }

        if (this.state.success){
            return (
                <SuccessStatus label={this.props.apiName} />
            )
        }

        return (null);
    }
}

export default SingleApiStatus;