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

    var LoginButton = React.createClass({
        getInitialState: function() {
            var isDev = getQueryStringParams("dev") || null;

            var baseUrl = "https://twu-loginapi.herokuapp.com";
            if (isDev === "true"){
                baseUrl = "http://localhost:8080";
            }

            var loginApiUrl = baseUrl + "/api/v1/login";

            return {
                url: loginApiUrl + "?callback=" + window.location.href,
                visible: true
            }
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

    ReactDOM.render(
        <LoginButton/>,
        document.getElementById("loginContainer")
    );
})();