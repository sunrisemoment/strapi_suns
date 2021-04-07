module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: env('DATABASE_HOST', '127.0.0.1'),
                // host: env('DATABASE_HOST', 'ec2-54-241-141-30.us-west-1.compute.amazonaws.com'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME'),
                username: env('DATABASE_USERNAME'),
                password: env('DATABASE_PASSWORD'),
                ssl: env.bool('DATABASE_SSL', false),
            },
            options: {}
        },
    },
});