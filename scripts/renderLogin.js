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
    <LoginButton/>,
    document.getElementById("loginContainer")
);