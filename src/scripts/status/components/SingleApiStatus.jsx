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
            success: false
        };
    }

    componentDidMount(){
        var fullUrl = getBaseUrl() + this.props.apiUrl;
        $.getJSON(fullUrl)
            .done(function(json){
                console.log(json);
                if (json.status === "ok"){
                    this.setState({
                        loading: false,
                        error: false,
                        success: true
                    });
                } 
                else {
                    this.setState({
                        loading: false,
                        error: true,
                        success: false
                    });
                }
            }.bind(this))
            .fail(function(err){
                console.log(err);
                this.setState({
                    loading: false,
                    error: true,
                    success: false
                });
            }.bind(this));
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