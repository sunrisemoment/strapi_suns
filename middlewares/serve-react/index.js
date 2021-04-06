'use strict'

const fs = require('fs');
const path = require('path');
const koaStatic = require('koa-static');

module.exports = strapi => {
    return {
        async initialize() {
            const {maxAge, path: publicPath} = strapi.config.middleware.settings.public;
            const staticDir = path.resolve(strapi.dir, publicPath || strapi.config.paths.static);
            const frontUrl = staticDir + "/react";
            strapi.router.get(
                '/*',
                async (ctx, next) => {
                    const parse = path.parse(ctx.url);
                    ctx.url = path.join(parse.dir, parse.base);

                    await next();
                },
                koaStatic(frontUrl, {
                    maxage: maxAge,
                    defer: false,
                })
            );

            strapi.router.get('*', ctx => {
                ctx.type = 'html';
                ctx.body = fs.createReadStream(path.join(frontUrl + '/index.html'));
            });
        },
    };
};