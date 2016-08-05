import React from 'react';

class UnfollowFeedItem extends React.Component {
    render (){
        return (
            <a className="list-group-item list-group-item-action"
                href={this.props.item.details.url}>
                <h5 className="list-group-item-heading">
                    Unfollow @{this.props.item.details.userName}
                </h5>
                <p className="list-group-item-text">
                    {this.props.item.creation_time_str}
                </p>
            </a>
        )
    }
}

export default UnfollowFeedItem;