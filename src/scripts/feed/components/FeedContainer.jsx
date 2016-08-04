import React from 'react';
import FeedBox from './FeedBox.jsx'
import {getQueryStringParams, getApiBaseUrl} from '../../lib/urlUtils.js'

class FeedContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: getQueryStringParams("user")
        };
    }

    componentDidMount (){
        if (!this.state.userName){
            window.location.href = "/";
            return;
        }
    }

    render (){
        var userDetails = {
            userName: this.state.userName
        };

        if (this.state.userName){
            return (
                <FeedBox userDetails={userDetails}/>
            )
        }

        return (null);
    }
}

export default FeedContainer;