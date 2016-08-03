import React from 'react';
import UnfollowFeedItem from './UnfollowFeedItem.jsx';

class SingleFeedItem extends React.Component {
    render (){
        if (this.props.item.type === "unfollow"){
            return (
                <li>
                    <UnfollowFeedItem item={this.props.item}/>
                </li>
            )
        }

        return (
            <li>
                {this.props.item.id}
            </li>
        )
    }
}

export default SingleFeedItem;