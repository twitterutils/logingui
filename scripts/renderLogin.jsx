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

            var baseUrl = "https://twu-api.herokuapp.com";
            if (urlParams.isDev === "true"){
                baseUrl = "http://localhost:8080";
            }
            var loginApiUrl = baseUrl + "/login/api/v1/login";

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
            return {
                userId: readUrlParams().userId
            };
        },
        render: function(){
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

    var LoginError = React.createClass({
        getInitialState: function(){
            return {
                error: readUrlParams().error
            };
        },
        render: function(){
            return (
                <div className="jumbotron error-container">
                    <h2 class="bg-danger">Login Failed</h2>
                    <p class="lead">{this.state.error}</p>
                </div>
            );
        }
    });

    var LoginResult = React.createClass({
        getInitialState: function(){
            var urlParams = readUrlParams();

            return {
                shouldDisplayError: urlParams.error,
                shouldDisplaySuccess: urlParams.userId
            }
        },
        render: function(){
            if (this.state.shouldDisplayError){
                return (
                    <div>
                        <LoginError />
                    </div>
                );
            }

            if (this.state.shouldDisplaySuccess){
                return (
                    <div>
                        <LoginSuccess />
                    </div>
                );
            }

            return (null);
        }
    })

    ReactDOM.render(
        <LoginButton />,
        document.getElementById("loginContainer")
    );
    ReactDOM.render(
        <LoginResult />,
        document.getElementById("loginResultContainer")
    );
})();