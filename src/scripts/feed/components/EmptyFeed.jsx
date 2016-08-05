import React from 'react';

class EmptyFeed extends React.Component {
    render (){
        return (
            <div>
                <h2>Empty Feed</h2>
                <p>
                    Your feed will grow as users are automatically unfollowed.
                </p>
            </div>
        )
    }
}

export default EmptyFeed;