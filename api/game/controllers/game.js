const axios = require('axios');

module.exports = {
    async getGame(ctx) {
        console.log(ctx.params);
        let url = 'http://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2020/scores/gamedetail/' + ctx.params.id + '_gamedetail.json';
        const { data } = await axios.get(url);
        // let game = data; game.g.st = 2;
        return data;
    }
};