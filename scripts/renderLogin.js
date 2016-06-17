var LoginButton = React.createClass({
    getInitialState: function() {
        return {
            url: "http://google.com"
        }
    },
    render: function() {
        return (
            <a className="btn btn-lg btn-success" role="button" href={this.state.url}>
                Signup Today
            </a>
        );
    }
});

ReactDOM.render(
    <LoginButton/>,
    document.getElementById("loginContainer")
);