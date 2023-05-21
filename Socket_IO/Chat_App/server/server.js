const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors());
 
const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});
 
const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log(`Nice to meet you ${socket.id}`);
    socket.emit('WELCOME_MESSAGE', "WELCOME TO THE SERVER!");

    socket.on("JOIN_MESSAGE", data => {
        socket.broadcast.emit("JOIN_MESSAGE", data);
    })

    socket.on("SEND_MESSAGE", data => {
        console.log('the message is', data)
        socket.broadcast.emit("NEW_MESSAGE", data);
    });
});



