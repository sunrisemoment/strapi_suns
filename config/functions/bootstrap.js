'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = () => {
    process.nextTick(() =>{
        var allowedOrigins = "http://localhost:* http://127.0.0.1:* http://ec2-54-67-8-123.us-west-1.compute.amazonaws.com:*";  
        var io = require('socket.io')(strapi.server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });

        io.on('connection', async function(socket) {
  
            console.log(`a user connected`)
            // send message on user connection
            socket.emit('connected', "connected");
  
            // listen for user diconnect
            socket.on('disconnect', () =>{
                console.log('a user disconnected')
            });
        });
        strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
    })
};
