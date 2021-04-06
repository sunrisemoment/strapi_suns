module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 80),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', 'a9338fc03b8f381b8984b9da3cdd58b3'),
        },
    },
});
