import React from 'react';

class UnfollowFeedItem extends React.Component {
    render (){
        return (
            <div>
                <span>Unfollow</span>
                <sub>
                    {this.props.item.creation_time_str}
                </sub>
                <a href={this.props.item.details.url}>
                    @{this.props.item.details.userName}
                </a>
            </div>
        )
    }
}

export default UnfollowFeedItem;