const axios = require('axios');
const crypto = require('crypto');

const path = '/v1/data/teams';
const method = 'GET';

//mock test
const host = 'mockapi.shottracker.com';
const userName = "2e4118d42e5011e6b4a4deecc6e6f587";
const secret = "2d64b892e8d434100001";
const baseUrl = 'http://mockapi.shottracker.com:8000';

async function teams(ctx) {
    var date = new Date().toUTCString();
    var requestLine = method + ' ' + path + ' HTTP/1.1';
    var stringToSign = 'date: ' + date.trim() + '\n'
             + 'host: ' + host + '\n'
             + requestLine;
    var encodedSignature = crypto.createHmac('sha1', secret).update(stringToSign).digest('base64');
    var hmacAuth = 'hmac username="' + userName + '",algorithm="hmac-sha1",headers="date host request-line",signature="' + encodedSignature + '"';
    
    console.log('date: ' + date);
    console.log('Authorization: ' + hmacAuth);
    
    let config = {
        url: path,
        method: method,
        baseURL: baseUrl,
        headers: {
            'date': date,
            'host': host,
            'Authorization': hmacAuth,
        }
    };
      
    var data = await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        return JSON.stringify(response.data);
    })
        .catch(function (error) {
            console.log(error);
            return JSON.stringify(error);
        });

    return data;
}

module.exports = {teams};