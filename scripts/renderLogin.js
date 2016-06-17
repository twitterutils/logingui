var LoginButton = React.createClass({displayName: "LoginButton",
    render: () => {
        return (
            <a className="btn btn-lg btn-success" role="button">
                Signup Today
            </a>
        );
    }
});

ReactDOM.render(
    <LoginButton/>,
    document.getElementById("loginContainer")
);