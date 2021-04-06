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
            entities = await strapi.services.categories.search(ctx.query, []);
        } else {
            entities = await strapi.services.categories.find(ctx.query, []);
        }
        entities.sort((a, b) => (a.id > b.id) ? 1 : -1);
        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.categories }));
    },
};
