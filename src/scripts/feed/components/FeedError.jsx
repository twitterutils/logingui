import React from 'react';

class FeedError extends React.Component {
    render (){
        return (
            <div>
                <h2>Error Loading Feed</h2>
                <p>{(this.props.error || {}).statusText || ""}</p>
            </div>
        )
    }
}

export default FeedError;