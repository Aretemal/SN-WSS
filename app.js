import express from 'express';
import http from 'http';
import cors from 'cors';
const app = express();
import { Server } from 'socket.io';
import {dialogAPI} from "./api.js";

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on('connection',  (socket) => {
    socket.on('DIALOG:JOIN_TO_DIALOG', ({ id }) => {
        socket.join(`${id}`);
    })
    socket.on('DIALOG:SEND_MESSAGE',  ({ response, id }) => {
        io.to(`${id}`).emit('DIALOG:GET_MESSAGE', response);
    })
    socket.on('DIALOG:LEAVE_FROM_DIALOG',  ({ id }) => {
        socket.leave(`${id}`);
    })
});

export default server;
