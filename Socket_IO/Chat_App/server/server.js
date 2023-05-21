const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors({origin:true}));
 
const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
 
const io = socket(server, {
    cors: {
        origin: true,
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

let messages = [];

io.on("connection", socket => {
    
    console.log(`Nice to meet you ${socket.id}`);
    socket.emit('WELCOME_MESSAGE', "WELCOME TO THE SERVER!");
    socket.emit('ALL_MESSAGES', messages);
    
    socket.on("JOIN_MESSAGE", data => {
        const msg = {from: data.joined, msg:`${data.joined} has joined the chat.`, id:'server'};
        messages.unshift(msg);
        socket.broadcast.emit("NEW_JOIN_MESSAGE", msg);
    })

    socket.on("SEND_MESSAGE", data => {
        messages.unshift(data);
        socket.broadcast.emit("NEW_MESSAGE", data);
    });

    socket.on('disconnect', reason => {
        console.log(reason);
        const msg = {from: "", msg:`User has left the chat.`, id:'server'};
        messages.unshift(msg);
        socket.broadcast.emit("DISCONNECT_MESSAGE", msg );   
    })
});



