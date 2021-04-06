'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.players.search(ctx.query, []);
        } else {
            entities = await strapi.services.players.find(ctx.query, []);
        }
    
        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.players }));
    },

    async findProducts(ctx) {
        let products;
        products = await strapi.services.players.findOne({player_id:ctx.params.id}, []);
        return products.products;
    },

    async findSeasonPlayers(ctx) {
        let players;
        players = await strapi.services.players.find({'seasons.season':ctx.params.season}, []);
        return players;
    }
};
