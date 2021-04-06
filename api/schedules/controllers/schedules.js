const axios = require('axios');

module.exports = {
    async schedules(ctx) {
        const { data } = await axios.get('http://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2020/teams/suns_schedule.json');
        return data;
    }
};