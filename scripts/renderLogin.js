var LoginButton = React.createClass({displayName: "LoginButton",
    render: () => {
        return (
            <a className="loginButton">
                Signup Today
            </a>
        );
    }
});

ReactDOM.render(
    React.createElement(LoginButton, null),
    document.getElementById("loginContainer")
);