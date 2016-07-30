(function(){
    var FeedItems = React.createClass({
        render: function(){
            return (
                <ul>
                    {(this.props.items || []).map(function (i){
                        return <SingleFeedItem key={i.id} item={i} />;
                    })}
                </ul>
            )
        }
    });

    var SingleFeedItem = React.createClass({
        render: function(){
            return (
                <li>
                    {this.props.item.id}
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
        getInitialState: function(){
            return {
                loading: true,
                error: null,
                items: []
            };
        },
        componentDidMount: function(){
            var username = "camilin87"
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
        },
        render: function(){
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
    });

    ReactDOM.render(
        <FeedContainer />,
        document.getElementById("feed-container")
    );
})();