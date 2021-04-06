const axios = require('axios');
//https://data.nba.com/data/v2015/json/mobile_teams/nba/2019//scores/pbp/0021901313_1_pbp.json

module.exports = {
    async getGamePbp(ctx) {
        console.log(ctx.params);
        let url = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/2020/scores/pbp/' + ctx.params.id + '_' + ctx.params.q + '_pbp.json';
        const { data } = await axios.get(url);
        return data;
    }
};