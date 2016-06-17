var LoginButton = React.createClass({displayName: "LoginButton",
    render: () => {
        return (
            React.createElement("a", {className: "loginButton"},
                "Signup Today"
            )
        );
    }
});

ReactDOM.render(
    React.createElement(LoginButton, null),
    document.getElementById("loginContainer")
);