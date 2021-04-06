'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async players(ctx) {
        let entity;
        console.log(ctx.params);
        entity = await strapi.services.seasons.findOne({season : ctx.params.season});
        return entity.players;
    }
};
