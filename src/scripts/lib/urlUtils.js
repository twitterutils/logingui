function getQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
}

function getApiBaseUrl(){
    var isDev = getQueryStringParams("dev") || null;

    var baseUrl = "https://twu-api.herokuapp.com";
    if (isDev === "true"){
        baseUrl = "http://localhost:8080";
    }

    return baseUrl;
}

export {getQueryStringParams, getApiBaseUrl};