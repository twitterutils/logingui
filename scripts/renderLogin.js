(function(){
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

    function readUrlParams(){
        return {
            isDev: getQueryStringParams("dev") || null,
            userId: getQueryStringParams("user_id") || null,
            error: getQueryStringParams("error") || null
        };
    }

    var LoginButton = React.createClass({
        getInitialState: function() {
            var urlParams = readUrlParams();

            var baseUrl = "https://twu-loginapi.herokuapp.com";
            if (urlParams.isDev === "true"){
                baseUrl = "http://localhost:8080";
            }
            var loginApiUrl = baseUrl + "/api/v1/login";

            return {
                url: loginApiUrl + "?callback=" + window.location.href,
                visible: !urlParams.error && !urlParams.userId
            };
        },
        render: function() {
            if (!this.state.visible){
                return(null);
            }

            return(
                <a className="btn btn-lg btn-success"
                    role="button"
                    href={this.state.url}>
                    Signup Today
                </a>
            );
        }
    });

    var LoginSuccess = React.createClass({
        getInitialState: function(){
            var urlParams = readUrlParams();

            return {
                userId: urlParams.userId,
                visible: urlParams.userId
            };
        },
        render: function(){
            if (!this.state.visible){
                return(null);
            }

            return (
                <div className="jumbotron success-container">
                    <h2>Login Successful</h2>
                    <p class="lead">
                        Twitter User Id: <span>{this.state.userId}</span>
                    </p>
                </div>
            );
        }
    });

    ReactDOM.render(
        <LoginButton/>,
        document.getElementById("loginContainer")
    );
    ReactDOM.render(
        <LoginSuccess/>,
        document.getElementById("loginResultContainer")
    );
})();