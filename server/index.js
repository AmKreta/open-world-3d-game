const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

const io = require('socket.io');

io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);

    socket.on('disconnect', function () {
        console.log('disconnected ' + socket.id);
        connectedUsers.delete(socket.id);
    });
    
    
    //socket logic
})

process.on('unhandledRejection', function (err, promise) {
    console.log('error:-' + err.message);
    server.close(() => process.exit(1));
});
