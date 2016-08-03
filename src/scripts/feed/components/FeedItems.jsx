import React from 'react';
import EmptyFeed from './EmptyFeed.jsx'
import SingleFeedItem from './SingleFeedItem.jsx'

class FeedItems extends React.Component {
    render (){
        var items = this.props.items || [];

        if (items.length === 0){
            return (
                <EmptyFeed />
            )
        }

        return (
            <div>
                <h2>
                    <a href={items[0].url}>
                        @{items[0].userName}
                    </a> Feed
                </h2>
                <ul>
                    {items.map(function (i){
                        return <SingleFeedItem key={i.id} item={i} />;
                    })}
                </ul>
            </div>
        )
    }
}

export default FeedItems;
