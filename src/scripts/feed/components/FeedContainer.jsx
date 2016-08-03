import React from 'react';
import Loading from './Loading.jsx'
import FeedError from './FeedError.jsx'
import FeedItems from './FeedItems.jsx'
import {getQueryStringParams} from '../../lib/urlUtils.js'

class FeedContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            items: []
        };
    }

    componentDidMount (){
        var username = getQueryStringParams("user");

        if (!username){
            window.location.href = "/";
            return;
        }

        var url = "https://twu-api.herokuapp.com/public/api/v1/feed/" + username;
        $.getJSON(url)
            .done(function(json){
                console.log(json);
                this.setState({
                    loading: false,
                    error: null,
                    items: json || []
                });
            }.bind(this))
            .fail(function(err){
                console.error(err);
                this.setState({
                    loading: false,
                    error: err,
                    items: []
                });
            }.bind(this));
    }

    render (){
        if (this.state.loading){
            return (
                <Loading />
            )
        }

        if (this.state.error){
            return (
                <FeedError error={this.state.error} />
            )
        }

        return (
            <FeedItems items={this.state.items}/>
        )
    }
}

export default FeedContainer;