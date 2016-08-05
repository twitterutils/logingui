import React from 'react';
import UnfollowFeedItem from './UnfollowFeedItem.jsx';

class SingleFeedItem extends React.Component {
    render (){
        if (this.props.item.type === "unfollow"){
            return (
                <UnfollowFeedItem item={this.props.item}/>
            )
        }

        return (
            <div>
                {this.props.item.id}
            </div>
        )
    }
}

export default SingleFeedItem;