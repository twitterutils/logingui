import {getQueryStringParams} from '../../lib/urlUtils.js'

export function readUrlParams(){
    return {
        isDev: getQueryStringParams("dev") || null,
        userId: getQueryStringParams("user_id") || null,
        error: getQueryStringParams("error") || null
    };
}

export {readUrlParams};