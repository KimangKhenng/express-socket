const express = require('express')
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require("socket.io");


const app = express()
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

// protocol: http, express
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
})

// protocal: websocket, socket.io
io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);
});

server.listen(3000, () => {
    console.log("Server listening on 3000")
})