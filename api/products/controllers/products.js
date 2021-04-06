'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async productsForPlayer(ctx) {
        let products;
        console.log(ctx.params);
        products = await strapi.services.products.find({players:ctx.params.id}, []);
        return products;
    },

    async productsPerPage(ctx) {
        console.log(ctx.params);
        let products;
        let startPoint = ctx.params.page * ctx.params.limit;
        products = await strapi.services.products.find({_limit: ctx.params.limit, _start: startPoint}, []);
        return products;
    },

    async productsPerPageByCategory(ctx) {
        console.log(ctx.params);
        let products;
        let startPoint = ctx.params.page * ctx.params.limit;
        products = await strapi.services.products.find({category: ctx.params.cid, _limit: ctx.params.limit, _start: startPoint}, []);
        return products;
    },

    async productsForPlayerPerPage(ctx) {
        let products;
        let startPoint = ctx.params.page * ctx.params.limit;
        let player = await strapi.services.players.findOne({player_id:ctx.params.pid}, []);
        products = await strapi.services.products.find({players: player.id, _limit: ctx.params.limit, _start: startPoint}, []);
        return products;
    },

    async productsForPlayerPerPageByCategory(ctx) {
        let products;
        let startPoint = ctx.params.page * ctx.params.limit;
        let player = await strapi.services.players.findOne({player_id:ctx.params.pid}, []);
        products = await strapi.services.products.find({players: player.id, _limit: ctx.params.limit, _start: startPoint, category: ctx.params.cid}, []);
        return products;
    },
};
