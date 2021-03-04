const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

const path = require('path');

const gameAssets = require('./gameAssets/gameAssets');

//middlewares
app.use(express.static(path.join(__dirname, 'gameAssets')));

const io = require('socket.io')();

io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);

    socket.on('disconnect', function () {
        console.log('disconnected ' + socket.id);
        connectedUsers.delete(socket.id);
    });


    //socket logic
});

app.get('/', (req, res) => {
    res.status(200).json({ sucess: true, payload: gameAssets });
});

server.listen(8000, () => {
    console.log(`app running on port ${8000}`);
});

process.on('unhandledRejection', function (err, promise) {
    console.log('error:-' + err.message);
    server.close(() => process.exit(1));
});
