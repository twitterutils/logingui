(function(){
    var FeedItems = React.createClass({
        render: function(){
            return (
                <ul>
                    {(this.props.items || []).map(function (i){
                        return <SingleFeedItem key={i} item={i} />;
                    })}
                </ul>
            )
        }
    });

    var SingleFeedItem = React.createClass({
        render: function(){
            return (
                <li>
                    {this.props.item}
                </li>
            )
        }
    });

    var Loading = React.createClass({
        render: function(){
            return (
                <div id="feed-loading">Loading Feed...</div>
            )
        }
    });

    var FeedError = React.createClass({
        render: function(){
            return (
                <div>
                    <h2>Error Loading Feed</h2>
                    <p>{this.props.error}</p>
                </div>
            )
        }
    });

    var FeedContainer = React.createClass({
        render: function(){
            return (
                <div>
                    <Loading />
                    <FeedError error="something went wrong" />
                    <FeedItems items={[1, 3, 4, 5]}/>
                </div>
            )
        }
    });

    ReactDOM.render(
        <FeedContainer />,
        document.getElementById("feed-container")
    );
})();