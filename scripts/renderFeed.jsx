(function(){
    var EmptyFeed = React.createClass({
        render: function(){
            return (
                <h2>Empty Feed</h2>
            )
        }
    });

    var FeedItems = React.createClass({
        render: function(){
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
    });

    var SingleFeedItem = React.createClass({
        render: function(){
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
    });

    var UnfollowFeedItem = React.createClass({
        render: function(){
            return (
                <div>
                    <span class="feed-item-type">Unfollow</span>
                    <a href={this.props.item.details.url}>
                        @{this.props.item.details.userName}
                    </a>
                </div>
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
                    <p>{(this.props.error || {}).statusText || ""}</p>
                </div>
            )
        }
    });

    function getQueryStringParams(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');

        for (var i = 0; i < sURLVariables.length; i++){
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam){
                return sParameterName[1];
            }
        }
    }

    var FeedContainer = React.createClass({
        getInitialState: function(){
            return {
                loading: true,
                error: null,
                items: []
            };
        },
        componentDidMount: function(){
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