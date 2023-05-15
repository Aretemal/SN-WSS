import { io } from '../../app.js';

class MessageController {
    sendMessageToRoom(req, res, next) {
        io.to(`${req.body.id}`).emit('DIALOG:SEND_MESSAGE', req.body);
        return true;
    }
}
export default new MessageController();
