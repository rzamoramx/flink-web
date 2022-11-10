const request = require('request')

// handle get request to flink test symbols api
api_get_request = function(url){
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err) reject(err)
            resolve(body)
        });
    })
}

// hendle post request to flink test symbols api
api_post_request = function(url, payload){
    var options = {
        uri: url,
        method: 'POST',
        json: payload
    };
    return new Promise((resolve, reject) => {
        request.post(options, (err, res, body) => {
            if (err) reject(err)
            resolve(body)
        });
    })
}

module.exports = {
    "api_call_get": api_get_request,
    "api_call_post": api_post_request
}