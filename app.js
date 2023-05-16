import express from 'express';
import http from 'http';
import cors from 'cors';
const app = express();
import { Server } from 'socket.io';
import router from './router.js';
import UsersOnlineInDialog from "./src/utils/UsersOnlineInDialog.js";

app.use(cors());
app.use(express.json());
app.use('/wss', router);

const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on('connection',  (socket) => {
    socket.on('DIALOG:JOIN_DIALOG', ({ dialogId, userId }) => {
        socket.join(`${dialogId}`);
        UsersOnlineInDialog.joinUser(userId, dialogId);
    });
    socket.on('DIALOG:LEAVE_DIALOG',  ({ userId, dialogId }) => {
        socket.leave(`${dialogId}`);
        UsersOnlineInDialog.leaveUser(userId, dialogId);
    });
});

export default server;
