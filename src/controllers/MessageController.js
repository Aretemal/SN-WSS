import { io } from '../../app.js';

class MessageController {
    sendMessageToRoom(req, res, next) {
        io.to(`${req.body.dialogId}`).emit('DIALOG:SEND_MESSAGE', req.body);
        return true;
    }
}
export default new MessageController();
