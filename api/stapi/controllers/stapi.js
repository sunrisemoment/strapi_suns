const axios = require('axios');
const crypto = require('crypto');

// mock test
const host = 'mockapi.shottracker.com';
const userName = '2e4118d42e5011e6b4a4deecc6e6f587';
const secret = '2d64b892e8d434100001';
const baseUrl = 'http://mockapi.shottracker.com:8000';

function generateToken(method, path, date) {
    var requestLine = method + ' ' + path + ' HTTP/1.1';
    var stringToSign = 'date: ' + date.trim() + '\n'
             + 'host: ' + host + '\n'
             + requestLine;
    var encodedSignature = crypto.createHmac('sha1', secret).update(stringToSign).digest('base64');
    var hmacAuth = 'hmac username="' + userName + '",algorithm="hmac-sha1",headers="date host request-line",signature="' + encodedSignature + '"';
    
    console.log('date: ' + date);
    console.log('Authorization: ' + hmacAuth);
    return hmacAuth;
}

async function details(ctx) {
    var path = `/v1/data/live/${ctx.params.id}/stats/details`;
    var date = new Date().toUTCString();
    let token = generateToken('GET', path, date);
    let config = {
        url: path,
        method: 'GET',
        baseURL: baseUrl,
        headers: {
            'date': date,
            'host': host,
            'Authorization': token,
        }
    }
      
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

async function live(ctx){
    var path = `/v1/data/live/${ctx.params.id}`;
    var date = new Date().toUTCString();
    let token = generateToken('GET', path, date);
    let config = {
        url: path,
        method: 'GET',
        baseURL: baseUrl,
        headers: {
            'date': date,
            'host': host,
            'Authorization': token,
        }
    }
      
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

async function search(ctx) {
    var path = '/v1/data/live/_search';
    var date = new Date().toUTCString();
    let token = generateToken('GET', path, date);
    let config = {
        url: path,
        method: 'GET',
        baseURL: baseUrl,
        headers: {
            'date': date,
            'host': host,
            'Authorization': token,
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

async function subscribeToken(ctx){
    var path = `/v1/data/live/${ctx.params.id}/_subscribe`;
    var date = new Date().toUTCString();
    let token = generateToken('GET', path, date);
    let config = {
        url: path,
        method: 'GET',
        baseURL: baseUrl,
        headers: {
            'date': date,
            'host': host,
            'Authorization': token,
        }
    };
      
    var data = await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        // return JSON.stringify(response.data);
        return response.data;
    })
        .catch(function (error) {
            console.log(error);
            return JSON.stringify(error);
        });

    return data;
}

async function subscribeGameToken(ctx){
    var path = `/v1/data/live/${ctx.params.id}/_game_subscribe`;
    var date = new Date().toUTCString();
    let token = generateToken('GET', path, date);
    let config = {
        url: path,
        method: 'GET',
        baseURL: baseUrl,
        headers: {
            'date': date,
            'host': host,
            'Authorization': token,
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

async function stats(ctx) {
    var path = `/v1/data/live/${ctx.params.id}/stats`;
    var date = new Date().toUTCString();
    let token = generateToken('GET', path, date);
    let config = {
        url: path,
        method: 'GET',
        baseURL: baseUrl,
        headers: {
            'date': date,
            'host': host,
            'Authorization': token,
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

module.exports = {details, live, search, subscribeToken, subscribeGameToken, stats};